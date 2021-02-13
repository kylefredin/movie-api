import { Entity, Column } from "typeorm";

@Entity()
class ProductionCompany {
  @Column({ type: "int", width: 10, nullable: false })
  companyId: number;

  @Column({ type: "varchar", length: 200 })
  companyName: string;
}

export default ProductionCompany;

export { ProductionCompany };
