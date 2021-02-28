import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, MaxLength } from "class-validator";

/**
 * Represents a logical grouping of MovieCrew for a Movie
 */
@Entity()
class Department {
  /**
   * The id of the department
   *
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int" })
  public id: number;

  /**
   * The name of the department
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 200, nullable: false })
  @MaxLength(200)
  @IsString()
  public name: string;
}

export default Department;

export { Department };
