import { Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Keyword } from "./Keyword";
import { Movie } from "./Movie";

@Entity()
class MovieKeyword {
  @PrimaryColumn()
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Keyword)
  keywordId: number;
}

export default MovieKeyword;

export { MovieKeyword };
