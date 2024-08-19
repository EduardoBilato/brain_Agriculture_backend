import { AppDataSource } from "../database/db";
import { Culture } from "../entities/Culture.entity";

export class CultureService {
  private cultureRepository = AppDataSource.getRepository(Culture);

  async getCultureList() {
    return this.cultureRepository.find({ select: { id: true, name: true } });
  }
}
