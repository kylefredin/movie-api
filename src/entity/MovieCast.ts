import { IsInt, IsString, Max, Min } from "class-validator";
import { Entity, OneToOne, Column, PrimaryColumn } from "typeorm";
import { Gender } from "./Gender";
import { Movie } from "./Movie";
import { Person } from "./Person";

@Entity()
class MovieCast {
  @OneToOne(() => Movie)
  movieId: number;

  @OneToOne(() => Person)
  personId: number;

  @PrimaryColumn({ default: "", type: "varchar", length: 400 })
  @Max(400)
  @IsString()
  characterName: string;

  @OneToOne(() => Gender)
  genderId: number;

  @Column({ default: 0, type: "int", width: 5 })
  @IsInt()
  @Min(0)
  castOrder: number;
}

export default MovieCast;

export { MovieCast };
