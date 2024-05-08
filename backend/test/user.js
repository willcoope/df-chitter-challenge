import User from '../models/user.model.js';

// Require the testing dependencies
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

// Require other code for testing
import server from '../index.js';
import testUsers from './testUsers.js';
const testDataArray = testUsers.users;

describe(`Testing requests on the database`, () => {
    beforeEach(async () => {
        await User.deleteMany()
            .catch(error => {
                console.log(`Error clearing`);
                throw new Error();
            });

        await User.insertMany(testDataArray)
            .then(() => console.log(`Database populated with test users`))
            .catch(error => {
                console.log(`Error inserting`);
                throw new Error();
            });
    });

    describe('/POST signup', () => {
        it(`valid data should register a new user`, async () => {
            const res = await chai.request(server).post(`/signup`).send({firstname: "testfirstname3", lastname: "testlastname3", email: "testemail3@mail.com", username: "test3", password: "password"});
            expect(res).to.have.status(201);
        });
        it(`existing data should return an error`, async () => {
            const res = await chai.request(server).post(`/signup`).send({firstname: "testfirstname3", lastname: "testlastname3", email: "testemail3@mail.com", username: "test1", password: "password"});
            expect(res).to.have.status(400);
        });
        it(`missing data should return an error`, async () => {
            const res = await chai.request(server).post(`/signup`).send({firstname: "testfirstname3", lastname: "testlastname3", email: "", username: "test3", password: "password"});
            expect(res).to.have.status(400);
        });
    });

    describe(`/POST login`, () => {
        it(`valid data should login a user`, async () => {
            const res = await chai.request(server).post(`/login`).send({ account: "test1", password: "password"});
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal(`Login Success`);
        });
        it(`invalid data should return an error`, async () => {
            const res = await chai.request(server).post(`/login`).send({ account: "test1", password: "invalid"});
            expect(res).to.have.status(400);
        });
    });
});