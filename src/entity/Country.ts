import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, Max } from "class-validator";

/**
 * Represents a country on planet Earth
 */
@Entity()
class Country {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ default: "", type: "varchar", length: 10, nullable: true })
  @Max(10)
  @IsString()
  isoCode: string;

  @Column({ default: "", type: "varchar", length: 200, nullable: true })
  @Max(200)
  @IsString()
  name: string;
}

export default Country;

export { Country };
