import { Connection } from "typeorm";
import { ProductionCompany } from "../../entity/ProductionCompany";

const companyProviders = [
  {
    provide: "COMPANY_REPOSITORY",
    useFactory: (connection: Connection) =>
      connection.getRepository(ProductionCompany),
    inject: ["DATABASE_CONNECTION"],
  },
];

export default companyProviders;

export { companyProviders };
