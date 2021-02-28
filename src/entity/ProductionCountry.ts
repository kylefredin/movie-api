import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { Movie } from "./Movie";

@Entity()
class ProductionCountry {
  @PrimaryGeneratedColumn({ type: "int" })
  public id: number;

  @ManyToOne(() => Movie)
  public movie: Movie;

  @ManyToOne(() => Country)
  public country: Country;
}

export default ProductionCountry;

export { ProductionCountry };
