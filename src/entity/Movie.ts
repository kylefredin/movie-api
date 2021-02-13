import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Movie {
  @PrimaryGeneratedColumn({ type: "int" })
  movieId: number;

  @Column({ length: 1000, type: "varchar", nullable: true })
  title: string;

  @Column({ type: "int", width: 10, nullable: true })
  budget: number;

  @Column({ type: "varchar", length: 1000, nullable: true })
  homepage: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  overview: string;

  @Column({ type: "decimal", precision: 12, scale: 6, nullable: true })
  popularity: number;

  @Column({ type: "date", nullable: true })
  releaseDate: Date;

  @Column({ type: "bigint", width: 20, nullable: true })
  revenue: number;

  @Column({ type: "int", width: 5, nullable: true })
  runtime: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  movieStatus: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  tagline: string;

  @Column({ type: "decimal", precision: 4, scale: 2, nullable: true })
  voteAverage: number;

  @Column({ type: "int", width: 10, nullable: true })
  voteCount: number;
}

export default Movie;

export { Movie };
