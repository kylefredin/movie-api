import { Connection } from "typeorm";
import { Movie } from "../../entity/Movie";

const movieProviders = [
  {
    provide: "MOVIE_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(Movie),
    inject: ["DATABASE_CONNECTION"],
  },
];

export default movieProviders;

export { movieProviders };
