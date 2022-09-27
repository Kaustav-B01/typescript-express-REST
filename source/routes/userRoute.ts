import express from "express";
import controller from "../controllers/userController";
const router = express.Router();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.patch("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.post("/", controller.addUser);
export = router;
