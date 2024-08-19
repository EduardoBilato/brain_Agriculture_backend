import { AppDataSource } from "../database/db";
import { CultureService } from "../service/CultureService";
import { Culture } from "../entities/Culture.entity";

describe("CultureService", () => {
  let cultureService: CultureService;

  beforeAll(async () => {
    await AppDataSource.initialize();
    cultureService = new CultureService();
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  it("should return a list of cultures", async () => {
    const mockCultures: Culture[] = [
      { id: "1", name: "Café" },
      { id: "2", name: "Cana de Açucar" },
    ];

    jest
      .spyOn(cultureService["cultureRepository"], "find")
      .mockResolvedValue(mockCultures);

    const cultures = await cultureService.getCultureList();

    expect(cultures).toEqual(mockCultures);
  });
});
