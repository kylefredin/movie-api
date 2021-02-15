import { IsString, Max } from "class-validator";
import {
  Entity,
  OneToOne,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Department } from "./Department";
import { Movie } from "./Movie";
import { Person } from "./Person";

@Entity()
class MovieCrew {
  @ManyToOne(() => Movie, (movie) => movie.crew)
  @JoinColumn({ name: "movieId" })
  movie: Movie;

  @OneToOne(() => Person)
  @JoinColumn({ name: "personId" })
  person: Person;

  @OneToOne(() => Department)
  @JoinColumn({ name: "departmentId" })
  department: Department;

  @PrimaryColumn({ default: "", type: "varchar", length: 200 })
  @Max(200)
  @IsString()
  job: string;
}

export default MovieCrew;

export { MovieCrew };
