import express from "express";
import producerRoutes from "./producerRoutes";
import farmRoutes from "./farmRoutes";
import cultureRoutes from "./cultureRoutes";
import dashboardRoutes from "./dashboardRoutes";

const router = express.Router();

router.get("/", (req, res) => res.send("hi"));

router.use('/producers',producerRoutes);
router.use('/farms',farmRoutes);
router.use('/cultures',cultureRoutes);
router.use('/dashboard',dashboardRoutes);

export default router;