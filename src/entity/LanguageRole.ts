import { Entity, Column, PrimaryColumn } from "typeorm";
import { Max } from "class-validator";

@Entity()
class LanguageRole {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  roleId: number;

  @Column({ type: "varchar", length: 20, nullable: true })
  @Max(20)
  langageRole: string;
}

export default LanguageRole;

export { LanguageRole };
