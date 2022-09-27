import { Request, Response, NextFunction } from "express";
import userData from "../data";

//getting all users
const getUsers = (req: Request, res: Response) => {
  res.statusCode = 200;
  res.send({ userData: userData });
};

//getting a single user
const getUser = (req: Request, res: Response) => {
  const userId: number = +req.params.id;
  const response = userData.find((el) => userId === el.id);
  res.statusCode = 200;
  res.send({ userData: response });
};

//updating a user
const updateUser = (req: Request, res: Response) => {
  const userId: number = +req.params.id;
  const newUser = req.body;
  const response = userData.find((el, i) => {
    if (el.id === userId) {
      userData[i] = newUser;
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
const deleteUser = (req: Request, res: Response) => {
  const userId: number = +req.params.id;
  const response = userData.find((el, i) => {
    if (el.id === userId) {
      userData.splice(i, 1);
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
const addUser = (req: Request, res: Response) => {
  const newUser = req.body;
  userData.push(newUser);
  res.statusCode = 201;
  res.send({
    data: newUser,
    message: "Added Successfully",
  });
};

export default { getUsers, getUser, updateUser, deleteUser, addUser };
