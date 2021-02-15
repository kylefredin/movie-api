import { Entity, Column, PrimaryColumn } from "typeorm";
import { IsString, MaxLength } from "class-validator";

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
  genreId: number;

  /**
   * The name of the genre
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 100, nullable: false })
  @MaxLength(200)
  @IsString()
  genreName: string;
}

export default Genre;

export { Genre };
