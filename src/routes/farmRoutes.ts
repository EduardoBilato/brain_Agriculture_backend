import { Router } from "express";
import { FarmController } from "../controllers/FarmController";

const router = Router();
const farmController = new FarmController();

router.post("", (req, res) =>
  farmController.createFarm(req, res)
);
router.put("/:id", (req, res) =>
  farmController.updateFarm(req, res)
);
router.get("/:id", (req, res) =>
  farmController.getFarm(req, res)
);
router.get("/", (req, res) =>
  farmController.getFarmList(req, res)
);
router.put("/", (req, res) =>
  farmController.updateFarm(req, res)
);
router.delete("/:id", (req, res) =>
  farmController.deleteFarm(req, res)
);

export default router;
