import { Entity, OneToOne } from "typeorm";
import { Keyword } from "./Keyword";
import { Movie } from "./Movie";

@Entity()
class MovieKeyword {
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Keyword)
  keywordId: number;
}

export default MovieKeyword;

export { MovieKeyword };
