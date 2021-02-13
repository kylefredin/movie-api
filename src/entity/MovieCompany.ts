import { Entity, OneToOne } from "typeorm";
import { ProductionCompany } from "./ProductionCompany";
import { Movie } from "./Movie";

@Entity()
class MovieCompany {
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => ProductionCompany)
  companyId: number;
}

export default MovieCompany;

export { MovieCompany };
