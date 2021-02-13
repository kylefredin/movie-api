import { Entity, OneToOne } from "typeorm";
import Genre from "./Genre";
import { Movie } from "./Movie";

@Entity()
class MovieGenre {
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Genre)
  genreId: number;
}

export default MovieGenre;

export { MovieGenre };
