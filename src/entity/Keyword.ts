import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class Keyword {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  keywordId: number;

  @Column({ type: "varchar", length: 100, nullable: true })
  keywordName: string;
}

export default Keyword;

export { Keyword };
