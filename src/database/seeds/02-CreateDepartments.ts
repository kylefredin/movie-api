import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

class CreateDepartments implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryRunner()
      .query(
        "INSERT INTO `department` VALUES (1,'Camera'),(2,'Directing'),(3,'Production'),(4,'Writing'),(5,'Editing'),(6,'Sound'),(7,'Art'),(8,'Costume & Make-Up'),(9,'Crew'),(10,'Visual Effects'),(11,'Lighting'),(12,'Actors')"
      );
  }
}

export default CreateDepartments;

export { CreateDepartments };
