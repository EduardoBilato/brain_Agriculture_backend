import { AppDataSource } from "./database/db";
import { Producer } from "./entities/Producer.entity";
import { Farm } from "./entities/Farm.entity";
import { Culture } from "./entities/Culture.entity";

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");

    const soja = new Culture();
    soja.name = "Soja";

    const milho = new Culture();
    milho.name = "Milho";

    const algodao = new Culture();
    algodao.name = "Algodão";

    const cafe = new Culture();
    cafe.name = "Café";

    const canaDeAcucar = new Culture();
    canaDeAcucar.name = "Cana de Açucar";

    await AppDataSource.manager.save([
      soja,
      milho,
      algodao,
      cafe,
      canaDeAcucar,
    ]);

    const john = new Producer();
    john.cpfCnpj = "12345678910";
    john.name = "John Travolta";
    await AppDataSource.manager.save(john);

    const fazendaSantaRosa = new Farm();
    fazendaSantaRosa.name = "Fazenda Santa Rosa";
    fazendaSantaRosa.city = "Leme";
    fazendaSantaRosa.state = "SP";
    fazendaSantaRosa.totalArea = 1000.0;
    fazendaSantaRosa.agriculturalArea = 500.0;
    fazendaSantaRosa.vegetationArea = 350.24;
    fazendaSantaRosa.cultures = [milho, canaDeAcucar];
    fazendaSantaRosa.producer = john;

    const fazendaSantaCecilia = new Farm();
    fazendaSantaCecilia.name = "Fazenda Santa Cecília";
    fazendaSantaCecilia.city = "Araras";
    fazendaSantaCecilia.state = "SP";
    fazendaSantaCecilia.totalArea = 2050.0;
    fazendaSantaCecilia.agriculturalArea = 800.2;
    fazendaSantaCecilia.vegetationArea = 850.2;
    fazendaSantaCecilia.cultures = [cafe];
    fazendaSantaCecilia.producer = john;

    const fazendaMineira = new Farm();
    fazendaMineira.name = "Fazenda Mineira";
    fazendaMineira.city = "São João Del Rei";
    fazendaMineira.state = "MG";
    fazendaMineira.totalArea = 2050.0;
    fazendaMineira.agriculturalArea = 800.2;
    fazendaMineira.vegetationArea = 850.2;
    fazendaMineira.cultures = [cafe];
    fazendaMineira.producer = john;

    await AppDataSource.manager.save([
      fazendaSantaRosa,
      fazendaSantaCecilia,
      fazendaMineira,
    ]);

    const silvio = new Producer();
    silvio.cpfCnpj = "12345678911";
    silvio.name = "Silvio Santos";
    await AppDataSource.manager.save(silvio);

    const fazendaSBT = new Farm();
    fazendaSBT.name = "Fazenda SBT";
    fazendaSBT.city = "São Paulo";
    fazendaSBT.state = "SP";
    fazendaSBT.totalArea = 50000.0;
    fazendaSBT.agriculturalArea = 5000.0;
    fazendaSBT.vegetationArea = 3500.24;
    fazendaSBT.cultures = [soja, milho, algodao, cafe, canaDeAcucar];
    fazendaSBT.producer = silvio;

    await AppDataSource.manager.save([fazendaSBT]);

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await AppDataSource.destroy();
  }
}

seed();
