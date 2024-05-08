import express from "express";
import { check, validationResult } from "express-validator";
import { chitController } from "../controllers/chit.controller.js";

const router = express.Router();

router.route("/").post(
  [
    check("user", "User is required").not().isEmpty(),
    check("content", "Content is required").not().isEmpty(),
    check("time", "Time is required").not().isEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  chitController
);

export { router as chit };
