import { Entity, Column } from "typeorm";

@Entity()
class LanguageRole {
  @Column({ type: "int", width: 10, nullable: false })
  roleId: number;

  @Column({ type: "varchar", length: 20, nullable: true })
  langageRole: string;
}

export default LanguageRole;

export { LanguageRole };
