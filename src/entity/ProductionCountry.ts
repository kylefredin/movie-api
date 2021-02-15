import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { Movie } from "./Movie";

@Entity()
class ProductionCountry {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ManyToOne(() => Movie)
  movie: Movie;

  @ManyToOne(() => Country)
  country: Country;
}

export default ProductionCountry;

export { ProductionCountry };
