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

  @Column({ type: "varchar", length: 200 })
  job: string;
}

export default MovieCrew;

export { MovieCrew };
