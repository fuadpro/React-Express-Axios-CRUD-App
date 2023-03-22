import express  from "express";

import { getUsers, getSingleUser, createUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;