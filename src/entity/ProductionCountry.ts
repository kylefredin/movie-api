import { Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Country } from "./Country";
import { Movie } from "./Movie";

@Entity()
class ProductionCountry {
  @PrimaryColumn({ name: "movieId" })
  movie: number;

  @OneToOne(() => Country)
  @JoinColumn({ name: "countryId" })
  country: Country;
}

export default ProductionCountry;

export { ProductionCountry };
