import { Router } from "express";
import upload from "../config/multer";
import * as contactController from "../controllers/contactController";

const router = Router();

router.get("/", contactController.getAllContacts);
router.post("/", upload.single("photo"), contactController.createContact);
router.put("/:contactId", contactController.updateContact);
router.delete("/:contactId", contactController.deleteContact);

export default router;
