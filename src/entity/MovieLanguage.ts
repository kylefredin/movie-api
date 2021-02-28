import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Language } from "./Language";
import { LanguageRole } from "./LanguageRole";
import { Movie } from "./Movie";

@Entity()
class MovieLanguage {
  @PrimaryGeneratedColumn({ type: "int" })
  public id: number;

  @ManyToOne(() => Movie)
  public movie: Movie;

  @ManyToOne(() => Language)
  @JoinColumn({ name: "languageId" })
  public language: Language;

  @ManyToOne(() => LanguageRole)
  @JoinColumn({ name: "languageRoleId" })
  public languageRole: LanguageRole;
}

export default MovieLanguage;

export { MovieLanguage };
