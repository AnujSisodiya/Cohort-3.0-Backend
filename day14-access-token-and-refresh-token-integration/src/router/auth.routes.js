import express from "express"
import {registerController,loginUserController,refreshTokenController} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/register",registerController);
router.get("/login",loginUserController)
router.get("/refresh",refreshTokenController)

export default router;