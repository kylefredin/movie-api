import { IsString, Max } from "class-validator";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class Person {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  id: number;

  @Column({ default: "", type: "varchar", length: 500, nullable: true })
  @Max(500)
  @IsString()
  name: string;
}

export default Person;

export { Person };
