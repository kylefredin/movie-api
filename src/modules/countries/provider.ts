import { Connections, Repositories } from "src/enums";
import { Connection } from "typeorm";
import { Country } from "../../entity/Country";

const countryProviders = [
  {
    /**
     * Defines the name of this provider
     *
     * @type {string}
     */
    provide: Repositories.Country,

    /**
     * Defines the function to run when this provider is requested
     *
     * @param {Connection} connection
     * @return {Repository<Country>}
     */
    useFactory: (connection: Connection) => connection.getRepository(Country),

    /**
     * Defines the arguments for the useFactory method
     *
     * @type {string[]}
     */
    inject: [Connections.Database],
  },
];

export default countryProviders;

export { countryProviders };
