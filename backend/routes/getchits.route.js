import express from "express";
import { check, validationResult } from "express-validator";
import { getchitsController } from "../controllers/getchits.controller.js";

const router = express.Router();

router.route("/").get(getchitsController);

export { router as getchits };
