import { AppDataSource } from "../database/db";
import { Producer } from "../entities/Producer.entity";
import { FarmService } from "./FarmService";

const relationship = {
  relations: ["farms", "farms.cultures"],
  select: {
    id: true,
    name: true,
    cpfCnpj: true,
    farms: {
      id: true,
      name: true,
      city: true,
      state: true,
      totalArea: true,
      agriculturalArea: true,
      vegetationArea: true,
      cultures: { id: true, name: true },
    },
  },
};

export class ProducerService {
  private producerRepository = AppDataSource.getRepository(Producer);
  private farmService = new FarmService();

  async createProducer(data: any) {
    const producer = this.producerRepository.create(data);
    await this.producerRepository.save(producer);
    return producer;
  }

  async updateProducer(id: string, data: any) {
    await this.producerRepository.update(id, data);
    return this.producerRepository.findOneBy({ id });
  }

  async getProducer(id: string) {
    return this.producerRepository.find({
      where: { id },
      ...relationship,
    });
  }

  async getProducerList() {
    return this.producerRepository.find({
      ...relationship,
    });
  }

  async deleteProducer(id: string) {
    await this.farmService.deleteAllProducerFarms(id);
    await this.producerRepository.delete(id);
  }
}
