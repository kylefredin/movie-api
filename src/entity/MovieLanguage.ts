import { Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Language } from "./Language";
import { LanguageRole } from "./LanguageRole";
import { Movie } from "./Movie";

@Entity()
class MovieLanguage {
  @PrimaryColumn()
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Language)
  languageId: number;

  @OneToOne(() => LanguageRole)
  languageRoleId: number;
}

export default MovieLanguage;

export { MovieLanguage };
