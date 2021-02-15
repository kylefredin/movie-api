import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, Max } from "class-validator";

/**
 * Represents a country on planet Earth
 */
@Entity()
class Country {
  @PrimaryGeneratedColumn({ type: "int" })
  countryId: number;

  @Column({ default: "", type: "varchar", length: 10, nullable: true })
  @Max(10)
  @IsString()
  countryIsoCode: string;

  @Column({ default: "", type: "varchar", length: 200, nullable: true })
  @Max(200)
  @IsString()
  countryName: string;
}

export default Country;

export { Country };
