import { Connection, Repository } from "typeorm";
import { Connections, Repositories } from "../../enums";
import { Country } from "../../entity/Country";

const countryProviders = [
  {
    /**
     * Defines the name of this provider
     *
     * @type {string}
     */
    provide: Repositories.country,

    /**
     * Defines the function to run when this provider is requested
     *
     * @param {Connection} connection
     * @return {Repository<Country>}
     */
    useFactory: (connection: Connection): Repository<Country> =>
      connection.getRepository(Country),

    /**
     * Defines the arguments for the useFactory method
     *
     * @type {string[]}
     */
    inject: [Connections.database],
  },
];

export default countryProviders;

export { countryProviders };
