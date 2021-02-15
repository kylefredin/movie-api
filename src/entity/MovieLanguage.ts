import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Language } from "./Language";
import { LanguageRole } from "./LanguageRole";
import { Movie } from "./Movie";

@Entity()
class MovieLanguage {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ManyToOne(() => Movie)
  @JoinColumn({ name: "movieId" })
  movie: Movie;

  @ManyToOne(() => Language)
  @JoinColumn({ name: "languageId" })
  language: Language;

  @ManyToOne(() => LanguageRole)
  @JoinColumn({ name: "languageRoleId" })
  languageRole: LanguageRole;
}

export default MovieLanguage;

export { MovieLanguage };
