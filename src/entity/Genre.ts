import { Entity, Column, PrimaryColumn } from "typeorm";
import { Max } from "class-validator";

@Entity()
class Genre {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  genreId: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  @Max(100)
  genreName: string;
}

export default Genre;

export { Genre };
