import Chit from "../models/chit.model.js";

const chit = async ({ user, content, time }) => {
    const newChit = new Chit({ user, content, time });
    await newChit.save();
    return newChit;
  };

const getchits = async () => {
    const chits = await Chit.find();
    return chits;
  };


export const chitService = { chit, getchits };

