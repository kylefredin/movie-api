import { Connection } from "typeorm";
import { Country } from "../../entity/Country";

const countryProviders = [
  {
    provide: "COUNTRY_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(Country),
    inject: ["DATABASE_CONNECTION"],
  },
];

export default countryProviders;

export { countryProviders };
