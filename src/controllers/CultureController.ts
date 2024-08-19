import { Request, Response } from "express";
import { CultureService } from "..//service/CultureService";

/**
 * @swagger
 * tags:
 *   name: Culture
 *   description: API handler's culture
 */
export class CultureController {
  private cultureService = new CultureService();

  /**
   * @swagger
   * /api/cultures:
   *   get:
   *     summary: Get all cultures
   *     tags: [Culture]
   *     responses:
   *       200:
   *         description: List of cultures
   *       400:
   *         description: Bad request
   */
  async getCultureList(req: Request, res: Response) {
    try {
      const list = await this.cultureService.getCultureList();
      return res.status(200).json(list);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

}
