import { Movie } from "../entity/Movie";
import { MetaDto } from "./meta.dto";
import { LinksDto } from "./links.dto";

/**
 * Represents a list of movies
 */
class MoviesDto {
  /**
   * @type {Movie[]}
   */
  movies: Movie[] = [];

  /**
   * @type {MetaDto}
   */
  meta: MetaDto = new MetaDto();

  /**
   * @type {LinksDto}
   */
  links: LinksDto = new LinksDto();
}

export default MoviesDto;

export { MoviesDto };
