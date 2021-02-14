import { Movie } from "../entity/Movie";
import { MetaDto } from "./meta.dto";
import { LinksDto } from "./links.dto";

class MoviesDto {
  movies: Movie[] = [];

  meta: MetaDto = new MetaDto();

  links: LinksDto = new LinksDto();
}

export default MoviesDto;

export { MoviesDto };
