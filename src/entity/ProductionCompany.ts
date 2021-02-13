import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class ProductionCompany {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  companyId: number;

  @Column({ type: "varchar", length: 200 })
  companyName: string;
}

export default ProductionCompany;

export { ProductionCompany };
