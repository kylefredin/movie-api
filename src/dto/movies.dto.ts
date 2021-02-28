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
  public movies: Movie[] = [];

  /**
   * @type {MetaDto}
   */
  public meta: MetaDto = new MetaDto();

  /**
   * @type {LinksDto}
   */
  public links: LinksDto = new LinksDto();
}

export default MoviesDto;

export { MoviesDto };
