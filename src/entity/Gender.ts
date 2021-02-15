import { Entity, Column, PrimaryColumn } from "typeorm";
import { IsString, MaxLength } from "class-validator";

/**
 * Represents the gender of the MovieCast character
 */
@Entity()
class Gender {
  /**
   * The id of the gender
   *
   * @type {number}
   */
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  genderId: number;

  /**
   * The name of the gender
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 20, nullable: false })
  @MaxLength(20)
  @IsString()
  gender: string;
}

export default Gender;

export { Gender };
