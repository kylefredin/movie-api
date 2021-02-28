import { Connection, Repository } from "typeorm";
import { Connections, Repositories } from "../../enums";
import { Movie } from "../../entity/Movie";

const movieProviders = [
  {
    /**
     * Defines the name of this provider
     *
     * @type {string}
     */
    provide: Repositories.movie,

    /**
     * Defines the function to run when this provider is requested
     *
     * @param {Connection} connection
     * @return {Repository<Movie>}
     */
    useFactory: (connection: Connection): Repository<Movie> =>
      connection.getRepository(Movie),

    /**
     * Defines the arguments for the useFactory method
     *
     * @type {string[]}
     */
    inject: [Connections.database],
  },
];

export default movieProviders;

export { movieProviders };
