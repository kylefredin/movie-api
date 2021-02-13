import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Movie {
  @PrimaryGeneratedColumn({ type: "int" })
  movieId: number;

  @Column({ length: 1000, type: "varchar", nullable: true })
  title: string;

  @Column({ type: "int", width: 10 })
  budget: number;

  @Column({ type: "varchar", length: 1000, nullable: true })
  homepage: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  overview: string;

  @Column({ type: "decimal", precision: 12, scale: 6 })
  popularity: number;

  @Column({ type: "date" })
  releaseDate: string;

  @Column({ type: "bigint", width: 20 })
  revenue: number;

  @Column({ type: "int", width: 5 })
  runtime: number;

  @Column({ type: "varchar", length: 50 })
  movieStatus: string;

  @Column({ type: "varchar", length: 1000 })
  tagline: string;

  @Column({ type: "decimal", precision: 4, scale: 2 })
  voteAverage: number;

  @Column({ type: "int", width: 10 })
  voteCount: number;
}

export default Movie;

export { Movie };
