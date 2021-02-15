import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { IsDate, IsDecimal, IsInt, IsString, Max, Min } from "class-validator";
import Genre from "./Genre";
import MovieCast from "./MovieCast";
import MovieCrew from "./MovieCrew";
import Keyword from "./Keyword";
import ProductionCompany from "./ProductionCompany";

@Entity()
class Movie {
  @PrimaryGeneratedColumn({ type: "int" })
  movieId: number;

  @Column({ default: "", length: 1000, type: "varchar", nullable: true })
  @Max(1000)
  @IsString()
  title: string;

  @Column({ default: 0, type: "int", width: 10, nullable: true })
  budget: number;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  homepage: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  overview: string;

  @Column({
    default: 0,
    type: "decimal",
    precision: 12,
    scale: 6,
    nullable: true,
  })
  @IsDecimal()
  popularity: number;

  @Column({ type: "date", nullable: true })
  @IsDate()
  releaseDate: Date;

  @Column({ default: 0, type: "bigint", width: 20, nullable: true })
  @IsInt()
  @Min(0)
  revenue: number;

  @Column({ default: 0, type: "int", width: 5, nullable: true })
  @IsInt()
  @Min(0)
  runtime: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  @Max(50)
  movieStatus: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  tagline: string;

  @Column({
    default: 0.0,
    type: "decimal",
    precision: 4,
    scale: 2,
    nullable: true,
  })
  @IsDecimal()
  @Min(0)
  voteAverage: number;

  @Column({ default: 0, type: "int", width: 10, nullable: true })
  @IsInt()
  @Min(0)
  voteCount: number;

  @ManyToMany(() => MovieCast, (movieCast) => movieCast.movie)
  cast: MovieCast[];

  @ManyToMany(() => MovieCrew, (movieCrew) => movieCrew.movie)
  crew: MovieCrew[];

  @ManyToMany(() => Genre)
  @JoinTable({
    name: "movie_genre",
    joinColumn: { name: "movieId", referencedColumnName: "movieId" },
    inverseJoinColumn: { name: "genreId", referencedColumnName: "genreId" },
  })
  genres: Genre[];

  @ManyToMany(() => Keyword)
  @JoinTable({
    name: "movie_keywords",
    joinColumn: { name: "movieId", referencedColumnName: "movieId" },
    inverseJoinColumn: { name: "keywordId", referencedColumnName: "keywordId" },
  })
  keywords: Keyword[];

  @ManyToMany(() => ProductionCompany)
  @JoinTable({
    name: "movie_company",
    joinColumn: { name: "movieId", referencedColumnName: "movieId" },
    inverseJoinColumn: { name: "companyId", referencedColumnName: "companyId" },
  })
  companies: ProductionCompany[];
}

export default Movie;

export { Movie };
