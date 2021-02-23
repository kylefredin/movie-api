import { IsString, Max } from "class-validator";
import { RecordLinksDto } from "../dto/recordLinks.dto";
import { Entity, Column, PrimaryColumn, ManyToMany } from "typeorm";
import { Movie } from "./Movie";

@Entity()
class ProductionCompany {
  /**
   * The production company's id
   *
   * @type {number}
   */
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  id: number;

  /**
   * The production company's name
   *
   * @type {string}
   */
  @Column({ default: "", type: "varchar", length: 200 })
  @Max(200)
  @IsString()
  name: string;

  /**
   * List of movies for the production company
   *
   * @type {Movie[]}
   */
  @ManyToMany(() => Movie, (movie) => movie.companies)
  movies: Movie[];

  /**
   * @type {RecordLinksDto}
   */
  links: RecordLinksDto = new RecordLinksDto();
}

export default ProductionCompany;

export { ProductionCompany };
