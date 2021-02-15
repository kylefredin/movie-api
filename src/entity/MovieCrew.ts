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
  crewId: number;

  @ManyToOne(() => Movie, (movie) => movie.crew)
  @JoinColumn({ name: "movieId" })
  movie: Movie;

  @ManyToOne(() => Person)
  @JoinColumn({ name: "personId" })
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
