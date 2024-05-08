import { chitService } from "../services/chit.service.js";

export const chitController = async (req, res) => {
    try {
        const chit = await chitService.chit(req.body);
        res.status(201).send({ message: `Chit posted`, chit });
    } catch (e) {
        res.status(400).send({
            message: `Unable to post with these details`,
            chit: req.body,
        });
    }
};
