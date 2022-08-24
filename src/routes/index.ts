import { Router } from "express";
import userRoutes from "./userRoutes";
import contactRoutes from "./contactRoutes";
import * as loginController from "../controllers/loginController";
import * as userController from "../controllers/userController";
// import authenticate from "../middlewares/authenticate";

const router = Router();

router.post("/signup", userController.createUser);
router.post("/signin", loginController.signin);

// router.use(authenticate);

router.use("/users", userRoutes);

router.use("/contacts", contactRoutes);

// router.use("/", (req, res) => {
//     res.send("API V1");
// });

export default router;
