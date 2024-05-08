import User from "../models/user.model.js";

const login = async ({ account, password }) => {
  const user = await User.findOne({
    $or: [{ username: account }, { email: account }],
  });
  if (user && password === user.password) {
    return user;
  }
  throw new Error();
};

const signup = async ({ firstname, lastname, username, email, password }) => {
  const user = await User.findOne({  $or: [{ username: username }, { email: email }], });
  if (user) {
      throw new Error();
  }
  const newUser = new User({ firstname, lastname, username, email, password });
  await newUser.save();
  return newUser;
}


export const userService = { login, signup };
