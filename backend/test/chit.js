import Chit from '../models/chit.model.js';

import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

import server from '../index.js';
import testChits from './testChits.js';
const testDataArray = testChits.chits;

describe(`Testing requests on the database`, () => {
    beforeEach(async () => {
        await Chit.deleteMany()
            .catch(error => {
                console.log(`Error clearing`);
                throw new Error();
            });

        await Chit.insertMany(testDataArray)
            .then(() => console.log(`Database populated with test chits`))
            .catch(error => {
                console.log(`Error inserting`);
                throw new Error();
            });
    });

    describe(`/GET chits`, () => {
        it(`should return all chits`, async () => {
            const res = await chai.request(server).get(`/getchits`);
            expect(res).to.have.status(200);
            expect(res.body.chits).to.be.an('array');
            expect(res.body.chits.length).to.equal(2);
        });
    });
    describe(`/POST chit`, () => {
        it(`should add a chit`, async () => {
            const res = await chai.request(server).post(`/chit`).send({"user":
            {
                "firstname": "John",
                "lastname": "Doe",
                "username": "realjohndoe"
            },
            "content": "test",
            "time": "2021-06-01T12:00:00Z"});
            expect(res).to.have.status(201);
        });
        it(`should not add a chit without a user`, async () => {
            const res = await chai.request(server).post(`/chit`).send({"content": "test", "time": "2021-06-01T12:00:00Z"});
            expect(res).to.have.status(400);
        });
    });

});
