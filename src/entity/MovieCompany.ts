import { Entity, OneToOne, PrimaryColumn } from "typeorm";
import { ProductionCompany } from "./ProductionCompany";
import { Movie } from "./Movie";

@Entity()
class MovieCompany {
  @PrimaryColumn()
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => ProductionCompany)
  companyId: number;
}

export default MovieCompany;

export { MovieCompany };
