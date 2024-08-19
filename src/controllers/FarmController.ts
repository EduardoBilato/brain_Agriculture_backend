import { Request, Response } from "express";
import { FarmService } from "../service/FarmService";

/**
 * @swagger
 * tags:
 *   name: Farm
 *   description: API handler's Farm
 */
export class FarmController {
  private farmService = new FarmService();

   /**
   * @swagger
   * /api/farms:
   *   post:
   *     summary: Create a new farm
   *     tags: [Farm]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Nome da fazenda
   *               city:
   *                 type: string
   *                 description: Cidade da fazenda
   *               state:
   *                 type: string
   *                 description: Estado da fazenda
   *               totalArea:
   *                 type: number
   *                 description: Área total da fazenda
   *               agriculturalArea:
   *                 type: number
   *                 description: Área agrícola da fazenda
   *               vegetationArea:
   *                 type: number
   *                 description: Área de vegetação nativa da fazenda
   *               producer:
   *                 type: string
   *                 description: ID do produtor da fazenda
   *               cultures:
   *                 type: array
   *                 description: IDs das culturas da fazenda  
   *     responses:
   *       201:
   *         description: Farm created
   *       400:
   *         description: Bad request
   */
  async createFarm(req: Request, res: Response) {
    try {
      const producer = await this.farmService.createFarm(req.body);
      return res.status(201).json(producer);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * @swagger
   * /api/farms/{id}:
   *   put:
   *     summary: Update a farm
   *     tags: [Farm]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Farm ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Nome da fazenda
   *               city:
   *                 type: string
   *                 description: Cidade da fazenda
   *               state:
   *                 type: string
   *                 description: Estado da fazenda
   *               totalArea:
   *                 type: number
   *                 description: Área total da fazenda
   *               agriculturalArea:
   *                 type: number
   *                 description: Área agrícola da fazenda
   *               vegetationArea:
   *                 type: number
   *                 description: Área de vegetação nativa da fazenda
   *     responses:
   *       200:
   *         description: Farm updated
   *       400:
   *         description: Bad request
   */
  async updateFarm(req: Request, res: Response) {
    try {
      const producer = await this.farmService.updateFarm(req.params.id, req.body);
      return res.status(200).json(producer);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * @swagger
   * /api/farms/{id}:
   *   get:
   *     summary: Get a farm by ID
   *     tags: [Farm]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Farm ID
   *     responses:
   *       200:
   *         description: Farm found
   *       400:
   *         description: Bad request
   */
  async getFarm(req: Request, res: Response) {
    try {
      const farm = await this.farmService.getFarm(req.params.id);
      return res.status(200).json(farm);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * @swagger
   * /api/farms:
   *   get:
   *     summary: Get all farms
   *     tags: [Farm]
   *     responses:
   *       200:
   *         description: List of farms
   *       400:
   *         description: Bad request
   */
  async getFarmList(req: Request, res: Response) {
    try {
      const list = await this.farmService.getFarmList();
      return res.status(200).json(list);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  
  /**
   * @swagger
   * /api/farms/{id}:
   *   delete:
   *     summary: Delete a farm
   *     tags: [Farm]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Farm ID
   *     responses:
   *       204:
   *         description: Farm deleted
   *       400:
   *         description: Bad request
   */
  async deleteFarm(req: Request, res: Response) {
    try {
      await this.farmService.deleteFarm(req.params.id);
      return res.status(204).json();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
