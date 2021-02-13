import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Department {
  @PrimaryGeneratedColumn({ type: "int" })
  departmentId: number;

  @Column({ type: "varchar", length: 200, nullable: true })
  departmentName: string;
}

export default Department;

export { Department };
