import { Router } from "express";
import upload from "../config/multer";
import * as contactController from "../controllers/contactController";

const router = Router();

router.get("/", contactController.getAllContacts);
router.get("/:contactId", contactController.getContact);
router.post("/", upload.single("photo"), contactController.createContact);
router.put(
  "/:contactId",
  upload.single("photo"),
  contactController.updateContact
);
router.delete("/:contactId", contactController.deleteContact);

export default router;
