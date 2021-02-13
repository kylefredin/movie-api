import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class Genre {
  @PrimaryColumn({ type: "int", width: 10, nullable: false })
  genreId: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  genreName: string;
}

export default Genre;

export { Genre };
