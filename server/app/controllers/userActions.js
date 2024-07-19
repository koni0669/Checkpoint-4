// userActions.js
const { user } = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await user.readAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userFound = await user.read(id);
    if (!userFound) {
      res.status(404).json({ error: "User not found" });
    }
    res.json(userFound);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await user.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const drop = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await user.drop(id);
    if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  add,
  drop,
};
