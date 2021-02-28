import { Connection, Repository } from "typeorm";
import { ProductionCompany } from "../../entity/ProductionCompany";
import { Connections, Repositories } from "../../enums";

const companyProviders = [
  {
    /**
     * Defines the name of this provider
     *
     * @type {string}
     */
    provide: Repositories.company,

    /**
     * Defines the function to run when this provider is requested
     *
     * @param {Connection} connection
     * @return {Repository<ProductionCompany>}
     */
    useFactory: (connection: Connection): Repository<ProductionCompany> =>
      connection.getRepository(ProductionCompany),

    /**
     * Defines the arguments for the useFactory method
     *
     * @type {string[]}
     */
    inject: [Connections.database],
  },
];

export default companyProviders;

export { companyProviders };
