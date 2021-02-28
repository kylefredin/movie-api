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
  public id: number;

  @Column({ default: "", length: 1000, type: "varchar", nullable: true })
  @Max(1000)
  @IsString()
  @ApiProperty()
  public title: string;

  @Column({ default: 0, type: "int", width: 10, nullable: true })
  @ApiProperty()
  public budget: number;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  @ApiProperty()
  public homepage: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  @ApiProperty()
  public overview: string;

  @Column({
    default: 0,
    type: "decimal",
    precision: 12,
    scale: 6,
    nullable: true,
  })
  @IsDecimal()
  @ApiProperty()
  public popularity: number;

  @Column({ type: "date", nullable: true })
  @IsDate()
  @ApiProperty()
  public releaseDate: Date;

  @Column({ default: 0, type: "bigint", width: 20, nullable: true })
  @IsInt()
  @Min(0)
  @ApiProperty()
  public revenue: number;

  @Column({ default: 0, type: "int", width: 5, nullable: true })
  @IsInt()
  @Min(0)
  @ApiProperty()
  public runtime: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  @Max(50)
  @ApiProperty()
  public movieStatus: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  @Max(1000)
  @ApiProperty()
  public tagline: string;

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
  public voteAverage: number;

  @Column({ default: 0, type: "int", width: 10, nullable: true })
  @IsInt()
  @Min(0)
  @ApiProperty()
  public voteCount: number;

  @ManyToMany(() => MovieCast, (movieCast) => movieCast.movie)
  public cast: MovieCast[];

  @ManyToMany(() => MovieCrew, (movieCrew) => movieCrew.movie)
  public crew: MovieCrew[];

  @ManyToMany(() => Genre, (genre) => genre.movies)
  @JoinTable({ name: "movie_genre" })
  public genres: Genre[];

  @ManyToMany(() => Keyword, (keyword) => keyword.movies)
  @JoinTable({ name: "movie_keywords" })
  public keywords: Keyword[];

  @ManyToMany(() => ProductionCompany, (company) => company.movies)
  @JoinTable({ name: "movie_company" })
  public companies: ProductionCompany[];

  /**
   * @type {RecordLinksDto}
   */
  public links?: RecordLinksDto = new RecordLinksDto();
}

export default Movie;

export { Movie };
