import { AppDataSource } from "../database/db";
import { Producer } from "../entities/Producer.entity";
import { Farm } from "../entities/Farm.entity";

export class DashboardService {
  private producerRepository = AppDataSource.getRepository(Producer);
  private farmRepository = AppDataSource.getRepository(Farm);

  async getDashboardData(id: string) {
    const totalFarms = await this.farmRepository
      .createQueryBuilder("farm")
      .select("COUNT(farm.id)", "count")
      .where("farm.producerId = :producerId", { producerId: id })
      .getRawOne();

    const totalArea = await this.farmRepository
      .createQueryBuilder("farm")
      .select("SUM(farm.totalArea)", "sum")
      .where("farm.producerId = :producerId", { producerId: id })
      .getRawOne();

    const farmsByState = await this.farmRepository
      .createQueryBuilder("farm")
      .select("farm.state, COUNT(farm.id)", "count")
      .where("farm.producerId = :producerId", { producerId: id })
      .groupBy("farm.state")
      .getRawMany();

    const farmsByCulture = await this.farmRepository
      .createQueryBuilder("farm")
      .innerJoinAndSelect("farm.cultures", "culture")
      .select("culture.name, COUNT(DISTINCT farm.id)", "count")
      .where("farm.producerId = :producerId", { producerId: id })
      .groupBy("culture.name")
      .getRawMany();

    const landUse = await this.farmRepository
      .createQueryBuilder("farm")
      .select(
        "SUM(farm.agriculturalArea) as agriculturalArea, SUM(farm.vegetationArea) as vegetationArea"
      )
      .where("farm.producerId = :producerId", { producerId: id })
      .getRawOne();

    return {
      totalFarms: totalFarms.count,
      totalArea: totalArea.sum,
      farmsByState,
      farmsByCulture,
      landUse,
    };
  }
}
