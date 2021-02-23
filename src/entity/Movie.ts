import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { IsDate, IsDecimal, IsInt, IsString, Max, Min } from "class-validator";
import { Genre } from "./Genre";
import { MovieCast } from "./MovieCast";
import { MovieCrew } from "./MovieCrew";
import { Keyword } from "./Keyword";
import { ProductionCompany } from "./ProductionCompany";
import { RecordLinksDto } from "../dto/recordLinks.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

@Entity()
class Movie {
  @PrimaryGeneratedColumn({ type: "int" })
  @ApiPropertyOptional()
  id: number;

  @Column({ default: "", length: 1000, type: "varchar", nullable: true })
  @Max(1000)
  @IsString()
  @ApiProperty()
  title: string;

  @Column({ default: 0, type: "int", width: 10, nullable: true })
  @ApiProperty()
  budget: number;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  @ApiProperty()
  homepage: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  @ApiProperty()
  overview: string;

  @Column({
    default: 0,
    type: "decimal",
    precision: 12,
    scale: 6,
    nullable: true,
  })
  @IsDecimal()
  @ApiProperty()
  popularity: number;

  @Column({ type: "date", nullable: true })
  @IsDate()
  @ApiProperty()
  releaseDate: Date;

  @Column({ default: 0, type: "bigint", width: 20, nullable: true })
  @IsInt()
  @Min(0)
  @ApiProperty()
  revenue: number;

  @Column({ default: 0, type: "int", width: 5, nullable: true })
  @IsInt()
  @Min(0)
  @ApiProperty()
  runtime: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  @Max(50)
  @ApiProperty()
  movieStatus: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  @ApiProperty()
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
  @ApiProperty()
  voteAverage: number;

  @Column({ default: 0, type: "int", width: 10, nullable: true })
  @IsInt()
  @Min(0)
  @ApiProperty()
  voteCount: number;

  @ManyToMany(() => MovieCast, (movieCast) => movieCast.movie)
  cast: MovieCast[];

  @ManyToMany(() => MovieCrew, (movieCrew) => movieCrew.movie)
  crew: MovieCrew[];

  @ManyToMany(() => Genre, (genre) => genre.movies)
  @JoinTable({ name: "movie_genre" })
  genres: Genre[];

  @ManyToMany(() => Keyword, (keyword) => keyword.movies)
  @JoinTable({ name: "movie_keywords" })
  keywords: Keyword[];

  @ManyToMany(() => ProductionCompany, (company) => company.movies)
  @JoinTable({ name: "movie_company" })
  companies: ProductionCompany[];

  /**
   * @type {RecordLinksDto}
   */
  links: RecordLinksDto = new RecordLinksDto();
}

export default Movie;

export { Movie };
