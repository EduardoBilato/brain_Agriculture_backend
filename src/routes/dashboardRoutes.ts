import { Router } from "express";
import { DashboardController } from "../controllers/DashboardController";

const router = Router();
const dashboardController = new DashboardController();

router.get("/:id", (req, res) =>
  dashboardController.getDashboardData(req, res)
);

export default router;
