import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Max } from "class-validator";

@Entity()
class Language {
  @PrimaryGeneratedColumn({ type: "int" })
  languageId: number;

  @Column({ type: "varchar", length: 10, nullable: true })
  @Max(10)
  languageCode: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  @Max(500)
  languageName: string;
}

export default Language;

export { Language };
