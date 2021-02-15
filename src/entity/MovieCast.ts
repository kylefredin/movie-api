import { IsInt, IsString, Max, Min } from "class-validator";
import {
  Entity,
  OneToOne,
  Column,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Gender } from "./Gender";
import { Movie } from "./Movie";
import { Person } from "./Person";

@Entity()
class MovieCast {
  @ManyToOne(() => Movie, (movie) => movie.cast)
  @JoinColumn({ name: "movieId" })
  movie: Movie;

  @OneToOne(() => Person)
  @JoinColumn({ name: "personId" })
  person: Person;

  @PrimaryColumn({ default: "", type: "varchar", length: 400, nullable: false })
  @Max(400)
  @IsString()
  characterName: string;

  @OneToOne(() => Gender)
  @JoinColumn({ name: "genderId" })
  gender: Gender;

  @Column({ default: 0, type: "int", width: 5 })
  @IsInt()
  @Min(0)
  castOrder: number;
}

export default MovieCast;

export { MovieCast };
