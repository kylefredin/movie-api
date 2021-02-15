import { IsString, Max } from "class-validator";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class ProductionCompany {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  id: number;

  @Column({ default: "", type: "varchar", length: 200 })
  @Max(200)
  @IsString()
  name: string;
}

export default ProductionCompany;

export { ProductionCompany };
