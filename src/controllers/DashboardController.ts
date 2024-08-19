import { Request, Response } from "express";
import { DashboardService } from "../service/DashboardService";

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: API handler's Dashboard
 */
export class DashboardController {
  private dashboardService = new DashboardService();

  /**
   * @swagger
   * /api/dashboard/{id}:
   *   get:
   *     summary: Get dashboard data
   *     tags: [Dashboard]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Producer ID
   *     responses:
   *       200:
   *         description: Dashboard data
   *       400:
   *         description: Bad request
   */
  async getDashboardData(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await this.dashboardService.getDashboardData(id);
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
