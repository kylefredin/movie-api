import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country";
import { Movie } from "./Movie";

@Entity()
class ProductionCountry {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ManyToOne(() => Movie)
  @JoinColumn({ name: "movieId" })
  movie: number;

  @ManyToOne(() => Country)
  @JoinColumn({ name: "countryId" })
  country: Country;
}

export default ProductionCountry;

export { ProductionCountry };
