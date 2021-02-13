import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class Gender {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  genderId: number;

  @Column({ type: "varchar", length: 20, nullable: true })
  gender: string;
}

export default Gender;

export { Gender };
