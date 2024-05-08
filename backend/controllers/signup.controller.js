import { userService } from "../services/user.service.js";

export const signupController = async (req, res) => {
    try {
        const user = await userService.signup(req.body);
        res.status(201).send({ message: `Signup Success`, user });
    } catch (e) {
        res.status(400).send({
            message: `Invalid details`,
            user: req.body,
        });
    }
};