import { Entity, OneToOne } from "typeorm";
import { Country } from "./Country";
import { Movie } from "./Movie";

@Entity()
class ProductionCountry {
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Country)
  countryId: number;
}

export default ProductionCountry;

export { ProductionCountry };
