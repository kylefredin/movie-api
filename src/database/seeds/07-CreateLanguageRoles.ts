import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

class CreateLanguageRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryRunner()
      .query(
        "INSERT INTO `language_role` (id,name) VALUES (1,'Original'),(2,'Spoken')"
      );
  }
}

export default CreateLanguageRoles;

export { CreateLanguageRoles };
