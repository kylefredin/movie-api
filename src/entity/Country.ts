import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, MaxLength } from "class-validator";

/**
 * Represents a country on planet Earth
 */
@Entity()
class Country {
  /**
   * The country's identifier
   *
   * @type {number}
   */
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  /**
   * The country's iso code
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 10, nullable: false })
  @MaxLength(10)
  @IsString()
  isoCode: string;

  /**
   * The name of the country
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 200, nullable: false })
  @MaxLength(200)
  @IsString()
  name: string;
}

export default Country;

export { Country };
