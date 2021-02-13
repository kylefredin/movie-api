import { Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Country } from "./Country";
import { Movie } from "./Movie";

@Entity()
class ProductionCountry {
  @PrimaryColumn()
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Country)
  countryId: number;
}

export default ProductionCountry;

export { ProductionCountry };
