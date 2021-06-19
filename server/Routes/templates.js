import express, { Router } from "express";
import { createTemplate, getTemplate } from "../Controllers/templates.js";
const router = express.Router();

router.get("/", getTemplate);
router.post("/", createTemplate);

export default router;
