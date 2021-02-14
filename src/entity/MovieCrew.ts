import { IsString, Max } from "class-validator";
import { Entity, OneToOne, Column, PrimaryColumn, JoinColumn } from "typeorm";
import { Department } from "./Department";
import { Person } from "./Person";

@Entity()
class MovieCrew {
  @PrimaryColumn({ name: "movieId" })
  movie: number;

  @OneToOne(() => Person)
  @JoinColumn({ name: "personId" })
  person: Person;

  @OneToOne(() => Department)
  @JoinColumn({ name: "departmentId" })
  department: Department;

  @Column({ default: "", type: "varchar", length: 200 })
  @Max(200)
  @IsString()
  job: string;
}

export default MovieCrew;

export { MovieCrew };
