import { Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Language } from "./Language";
import { LanguageRole } from "./LanguageRole";
import { Movie } from "./Movie";

@Entity()
class MovieLanguage {
  @PrimaryColumn({ name: "movieId" })
  movieId: number;

  @OneToOne(() => Language)
  @JoinColumn({ name: "languageId" })
  language: Language;

  @OneToOne(() => LanguageRole)
  @JoinColumn({ name: "languageRoleId" })
  languageRole: LanguageRole;
}

export default MovieLanguage;

export { MovieLanguage };
