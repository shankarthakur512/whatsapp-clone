import {Router} from "express"
import { checkUser, onboardingUser } from "../controllers/AuthController.js";

const router = Router();

router.route("/login").post(checkUser)
router.route("/onboarding").post(onboardingUser)


export default router