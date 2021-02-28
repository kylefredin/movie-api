import { Connection } from "typeorm";
import { ProductionCompany } from "../../entity/ProductionCompany";
import { Connections, Repositories } from "../../enums";

const companyProviders = [
  {
    /**
     * Defines the name of this provider
     *
     * @type {string}
     */
    provide: Repositories.Company,

    /**
     * Defines the function to run when this provider is requested
     *
     * @param {Connection} connection
     * @return {Repository<ProductionCompany>}
     */
    useFactory: (connection: Connection) =>
      connection.getRepository(ProductionCompany),

    /**
     * Defines the arguments for the useFactory method
     *
     * @type {string[]}
     */
    inject: [Connections.Database],
  },
];

export default companyProviders;

export { companyProviders };
