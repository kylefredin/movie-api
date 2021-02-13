import { Entity, Column } from "typeorm";

@Entity()
class Genre {
  @Column({ type: "int", width: 10, nullable: false })
  genreId: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  genreName: string;
}

export default Genre;

export { Genre };
