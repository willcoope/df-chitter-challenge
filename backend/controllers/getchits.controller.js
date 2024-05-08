import { chitService } from "../services/chit.service.js";

export const getchitsController = async (req, res) => {
    try {
        const chits = await chitService.getchits(req.body);
        res.status(200).send({ message: `Chits retrieved`, chits });
    } catch (e) {
        res.status(400).send({
            message: `Unable to get chits`,
            chit: req.body,
        });
    }
};