import { Entity, OneToOne, Column } from "typeorm";
import { Gender } from "./Gender";
import { Movie } from "./Movie";
import { Person } from "./Person";

@Entity()
class MovieCast {
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Person)
  personId: number;

  @Column({ type: "varchar", length: 400 })
  characterName: string;

  @OneToOne(() => Gender)
  genderId: number;

  @Column({ type: "int", width: 5 })
  castOrder: number;
}

export default MovieCast;

export { MovieCast };
