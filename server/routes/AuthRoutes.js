import {Router} from "express"
import { checkUser } from "../controllers/AuthController.js";

const router = Router();

router.route("/login").post(checkUser)


export default router