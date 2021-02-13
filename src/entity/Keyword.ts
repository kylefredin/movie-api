import { Entity, Column, PrimaryColumn } from "typeorm";
import { Max } from "class-validator";

@Entity()
class Keyword {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  keywordId: number;

  @Column({ type: "varchar", length: 100, nullable: true })
  @Max(100)
  keywordName: string;
}

export default Keyword;

export { Keyword };
