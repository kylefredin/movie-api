import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, MaxLength } from "class-validator";
import { RecordLinksDto } from "../dto/recordLinks.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

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
  @ApiPropertyOptional()
  public id: number;

  /**
   * The country's iso code
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 10, nullable: false })
  @MaxLength(10)
  @IsString()
  @ApiProperty()
  public isoCode: string;

  /**
   * The name of the country
   *
   * @type {string}
   */
  @Column({ type: "varchar", length: 200, nullable: false })
  @MaxLength(200)
  @IsString()
  @ApiProperty()
  public name: string;

  /**
   * @type {RecordLinksDto}
   */
  public links?: RecordLinksDto = new RecordLinksDto();
}

export default Country;

export { Country };
