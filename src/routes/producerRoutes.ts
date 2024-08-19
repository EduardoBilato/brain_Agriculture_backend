import { Router } from "express";
import { ProducerController } from "../controllers/ProducerController";

const router = Router();
const producerController = new ProducerController();

router.post("/", (req, res) =>
  producerController.createProducer(req, res)
);
router.put("/:id", (req, res) =>
  producerController.updateProducer(req, res)
);
router.get("/", (req, res) =>
  producerController.getProducerList(req, res)
);
router.get("/:id", (req, res) =>
  producerController.getProducer(req, res)
);
router.delete("/:id", (req, res) =>
  producerController.deleteProducer(req, res)
);

export default router;
