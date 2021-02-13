import { IsString, Max } from "class-validator";
import { Entity, OneToOne, Column, PrimaryColumn } from "typeorm";
import { Department } from "./Department";
import { Movie } from "./Movie";
import { Person } from "./Person";

@Entity()
class MovieCrew {
  @PrimaryColumn()
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Person)
  personId: number;

  @OneToOne(() => Department)
  departmentId: number;

  @Column({ default: "", type: "varchar", length: 200 })
  @Max(200)
  @IsString()
  job: string;
}

export default MovieCrew;

export { MovieCrew };
