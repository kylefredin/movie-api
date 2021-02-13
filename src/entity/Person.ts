import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class Person {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  personId: number;

  @Column({ type: "varchar", length: 500, nullable: true })
  personName: string;
}

export default Person;

export { Person };
