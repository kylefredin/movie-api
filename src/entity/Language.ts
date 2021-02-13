import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Language {
  @PrimaryGeneratedColumn({ type: "int" })
  languageId: number;

  @Column({ type: "varchar", length: 10, nullable: true })
  languageCode: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  languageName: string;
}

export default Language;

export { Language };
