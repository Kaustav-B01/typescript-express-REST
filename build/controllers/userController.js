"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../data"));
//getting all users
const getUsers = (req, res) => {
    res.statusCode = 200;
    res.send({ userData: data_1.default });
};
//getting a single user
const getUser = (req, res) => {
    const userId = +req.params.id;
    const response = data_1.default.find((el) => userId === el.id);
    res.statusCode = 200;
    res.send({ userData: response });
};
//updating a user
const updateUser = (req, res) => {
    const userId = +req.params.id;
    const newUser = req.body;
    const response = data_1.default.find((el, i) => {
        if (el.id === userId) {
            data_1.default[i] = newUser;
            return true;
        }
    });
    res.statusCode = 200;
    res.send({
        oldData: response,
        newData: newUser,
        message: "Updated Successfully",
    });
};
//Delete user
const deleteUser = (req, res) => {
    const userId = +req.params.id;
    const response = data_1.default.find((el, i) => {
        if (el.id === userId) {
            data_1.default.splice(i, 1);
            return true;
        }
    });
    res.statusCode = 200;
    res.send({
        oldData: response,
        message: "Deleted Successfully",
    });
};
//adding a user
const addUser = (req, res) => {
    const newUser = req.body;
    data_1.default.push(newUser);
    res.statusCode = 201;
    res.send({
        data: newUser,
        message: "Added Successfully",
    });
};
exports.default = { getUsers, getUser, updateUser, deleteUser, addUser };
