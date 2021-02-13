import { Entity, Column } from "typeorm";

@Entity()
class Person {
  @Column({ type: "int", width: 10, nullable: false })
  personId: number;

  @Column({ type: "varchar", length: 500, nullable: true })
  personName: string;
}

export default Person;

export { Person };
