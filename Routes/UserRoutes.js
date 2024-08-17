import express from "express";
import UserController from "../Controllers/UserController.js";

const router=express.Router();

router.post('/user',UserController.createUser);
router.get('/users',UserController.getAll);
router.get('/user/:id',UserController.getUser);
router.put('/user/:id',UserController.updateUser);
router.delete('/user/:id',UserController.deleteUser);

export default router;