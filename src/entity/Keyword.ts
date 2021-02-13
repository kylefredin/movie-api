import { Entity, Column } from "typeorm";

@Entity()
class Keyword {
  @Column({ type: "int", width: 10, nullable: false })
  keywordId: number;

  @Column({ type: "varchar", length: 100, nullable: true })
  keywordName: string;
}

export default Keyword;

export { Keyword };
