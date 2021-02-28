import { Entity, Column, PrimaryColumn, ManyToMany } from "typeorm";
import { IsString, MaxLength } from "class-validator";
import { Movie } from "./Movie";

/**
 * Represents a type of Movie
 */
@Entity()
class Genre {
  /**
   * The id of the genre
   *
   * @type {number}
   */
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  public id: number;

  /**
   * The name of the genre
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 100, nullable: false })
  @MaxLength(200)
  @IsString()
  public name: string;

  /**
   * List of movies for the genre
   *
   * @type {Movie[]}
   */
  @ManyToMany(() => Movie, (movie) => movie.genres)
  public movies: Movie[];
}

export default Genre;

export { Genre };
