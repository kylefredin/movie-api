import { IsString, Max } from "class-validator";
import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { Department } from "./Department";
import { Movie } from "./Movie";
import { Person } from "./Person";

@Entity()
class MovieCrew {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ManyToOne(() => Movie, (movie) => movie.crew)
  movie: Movie;

  @ManyToOne(() => Person)
  person: Person;

  @ManyToOne(() => Department)
  @JoinColumn({ name: "departmentId" })
  department: Department;

  @Column({ default: "", type: "varchar", length: 200 })
  @Max(200)
  @IsString()
  job: string;
}

export default MovieCrew;

export { MovieCrew };
