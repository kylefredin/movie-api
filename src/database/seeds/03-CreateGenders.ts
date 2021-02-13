import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

class CreateGenders implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryRunner()
      .query(
        "INSERT INTO `gender` VALUES (0,'Unspecified'),(1,'Female'),(2,'Male')"
      );
  }
}

export default CreateGenders;

export { CreateGenders };
