import { Entity, Column, PrimaryColumn } from "typeorm";
import { IsString, MaxLength } from "class-validator";

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
  id: number;

  /**
   * The name of the keyword
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 100, nullable: false })
  @MaxLength(100)
  @IsString()
  name: string;
}

export default Keyword;

export { Keyword };
