import { Connections, Repositories } from "src/enums";
import { Connection } from "typeorm";
import { Movie } from "../../entity/Movie";

const movieProviders = [
  {
    /**
     * Defines the name of this provider
     *
     * @type {string}
     */
    provide: Repositories.Movie,

    /**
     * Defines the function to run when this provider is requested
     *
     * @param {Connection} connection
     * @return {Repository<Movie>}
     */
    useFactory: (connection: Connection) => connection.getRepository(Movie),

    /**
     * Defines the arguments for the useFactory method
     *
     * @type {string[]}
     */
    inject: [Connections.Database],
  },
];

export default movieProviders;

export { movieProviders };
