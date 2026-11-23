import express from "express";

import upload from "../config/multer.config.js";
import { getAllPost,createPost  } from "../contorllers/post.controller.js";

const router = express.Router();


router.post("/create",upload.single("image") ,createPost)
router.post("/getAllPost",getAllPost)

export default router;