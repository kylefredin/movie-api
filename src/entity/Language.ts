import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Max } from "class-validator";

@Entity()
class Language {
  @PrimaryGeneratedColumn({ type: "int" })
  public id: number;

  @Column({ type: "varchar", length: 10, nullable: true })
  @Max(10)
  public code: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  @Max(500)
  public name: string;
}

export default Language;

export { Language };
