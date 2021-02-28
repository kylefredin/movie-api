import { Entity, Column, PrimaryColumn, ManyToMany } from "typeorm";
import { IsString, MaxLength } from "class-validator";
import Movie from "./Movie";

/**
 * Represents a word or phrase that can describe/group Movies
 */
@Entity()
class Keyword {
  /**
   * The id of the keyword
   *
   * @type {number}
   */
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  public id: number;

  /**
   * The name of the keyword
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 100, nullable: false })
  @MaxLength(100)
  @IsString()
  public name: string;

  /**
   * List of movies for the keyword
   *
   * @type {Movie[]}
   */
  @ManyToMany(() => Movie, (movie) => movie.keywords)
  public movies: Movie[];
}

export default Keyword;

export { Keyword };
