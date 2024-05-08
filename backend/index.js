import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectToDb } from "./db/connection.js";
import { login } from "./routes/login.route.js";
import { signup } from "./routes/signup.route.js";
import { chit } from "./routes/chit.route.js";
import { getchits } from "./routes/getchits.route.js";

config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.use(express.json());
app.use(cors());
app.use("/login", login);
app.use("/signup", signup);
app.use("/chit", chit);
app.use("/getchits", getchits);

try {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await connectToDb(process.env.DB_URI);
    console.log(`Connected to DB @ ${process.env.DB_URI}`);
} catch (err) {
    console.log(err);
}

const server = app.listen(process.env.PORT, () =>
    console.log(
        `Server is running on: ${server.address().address}:${
            server.address().port
        }`
    )
);

export default server;
