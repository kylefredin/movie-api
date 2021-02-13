import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Country {
  @PrimaryGeneratedColumn({ type: "int" })
  countryId: number;

  @Column({ type: "varchar", length: 10, nullable: true })
  countryIsoCode: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  countryName: string;
}

export default Country;

export { Country };
