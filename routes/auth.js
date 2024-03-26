import express from "express";
import { login, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE USER
router.post("/signup", signup);

//SIGN IN
router.post("/login", login);

//GOOGLE AUTH
router.post("/google", );


export default router;
