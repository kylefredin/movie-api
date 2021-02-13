import { Entity, Column } from "typeorm";

@Entity()
class Gender {
  @Column({ type: "int", width: 10, nullable: false })
  genderId: number;

  @Column({ type: "varchar", length: 20, nullable: true })
  gender: string;
}

export default Gender;

export { Gender };
