import { Entity, Column, PrimaryColumn } from "typeorm";
import { Max } from "class-validator";

@Entity()
class Gender {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  genderId: number;

  @Column({ type: "varchar", length: 20, nullable: true })
  @Max(20)
  gender: string;
}

export default Gender;

export { Gender };
