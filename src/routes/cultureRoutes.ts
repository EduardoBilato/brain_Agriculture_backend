import { Router } from "express";
import { CultureController } from "../controllers/CultureController";

const router = Router();
const cultureController = new CultureController();

router.get("/", (req, res) =>
  cultureController.getCultureList(req, res)
);

export default router;
