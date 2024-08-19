import { AppDataSource } from "../database/db";
import { Farm } from "../entities/Farm.entity";

const relationship = {
  relations: ["producer", "cultures"],
  select: {
    id: true,
    name: true,
    city: true,
    state: true,
    producer: { id: true, name: true },
    cultures: { id: true, name: true },
  },
};

export class FarmService {
  private farmRepository = AppDataSource.getRepository(Farm);

  async createFarm(data: any) {
    const farm = this.farmRepository.create(data);
    await this.farmRepository.save(farm);
    return farm;
  }

  async updateFarm(id: string, data: any) {
    await this.farmRepository.update(id, data);
    return this.farmRepository.findOneBy({ id });
  }

  async getFarm(id: string) {
    return this.farmRepository.find({
      where: { id },
      ...relationship,
    });
  }

  async getFarmList() {
    return this.farmRepository.find({
      ...relationship,
    });
  }

  async deleteFarm(id: string) {
    await this.farmRepository.delete(id);
  }

  async deleteAllProducerFarms(producerId: string) {
    await this.farmRepository.delete({ producer: { id: producerId } });
  }
}
