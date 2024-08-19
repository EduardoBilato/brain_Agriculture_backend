import { Request, Response } from "express";
import { ProducerService } from "../service/ProducerService";

/**
 * @swagger
 * tags:
 *   name: Producer
 *   description: API handler's rural Producers
 */
export class ProducerController {
  private producerService = new ProducerService();

  /**
   * @swagger
   * /api/producers:
   *   post:
   *     summary: Create a new producer
   *     tags: [Producer]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               cpfCnpj:
   *                 type: string
   *                 description: CPF/CNPJ do produtor
   *               name:
   *                 type: string
   *                 description: Nome do produtor
   *     responses:
   *       201:
   *         description: Producer created
   *       400:
   *         description: Bad request
   */
  async createProducer(req: Request, res: Response) {
    try {
      const producer = await this.producerService.createProducer(req.body);
      return res.status(201).json(producer);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * @swagger
   * /api/producers/{id}:
   *   put:
   *     summary: Update a producer
   *     tags: [Producer]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Producer ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: Nome do produtor
   *     responses:
   *       200:
   *         description: Producer updated
   *       400:
   *         description: Bad request
   */
  async updateProducer(req: Request, res: Response) {
    try {
      const producer = await this.producerService.updateProducer(req.params.id, req.body);
      return res.status(200).json(producer);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * @swagger
   * /api/producers/{id}:
   *   get:
   *     summary: Get a producer by ID
   *     tags: [Producer]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Producer ID
   *     responses:
   *       200:
   *         description: Producer found
   *       400:
   *         description: Bad request
   */
  async getProducer(req: Request, res: Response) {
    try {
      const producer = await this.producerService.getProducer(req.params.id);
      return res.status(200).json(producer);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * @swagger
   * /api/producers:
   *   get:
   *     summary: Get all producers
   *     tags: [Producer]
   *     responses:
   *       200:
   *         description: List of producers
   *       400:
   *         description: Bad request
   */
  async getProducerList(req: Request, res: Response) {
    try {
      const list = await this.producerService.getProducerList();
      return res.status(200).json(list);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   * @swagger
   * /api/producers/{id}:
   *   delete:
   *     summary: Delete a producer
   *     tags: [Producer]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: Producer ID
   *     responses:
   *       204:
   *         description: Producer deleted
   *       400:
   *         description: Bad request
   */
  async deleteProducer(req: Request, res: Response) {
    try {
      await this.producerService.deleteProducer(req.params.id);
      return res.status(204).json();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

}
