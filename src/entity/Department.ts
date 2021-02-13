import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Max } from "class-validator";

@Entity()
class Department {
  @PrimaryGeneratedColumn({ type: "int" })
  departmentId: number;

  @Column({ type: "varchar", length: 200, nullable: true })
  @Max(200)
  departmentName: string;
}

export default Department;

export { Department };
