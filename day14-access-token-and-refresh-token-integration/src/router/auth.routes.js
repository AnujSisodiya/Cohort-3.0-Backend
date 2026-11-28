import express from "express"
import {registerController,loginUserController} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/register",registerController);
router.get("/login",loginUserController)

export default router;