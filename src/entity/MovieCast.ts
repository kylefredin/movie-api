import { IsInt, IsString, Max, Min } from "class-validator";
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "./Gender";
import { Movie } from "./Movie";
import { Person } from "./Person";

@Entity()
class MovieCast {
  @PrimaryGeneratedColumn({ type: "int" })
  public id: number;

  @ManyToOne(() => Movie, (movie) => movie.cast)
  public movie: Movie;

  @ManyToOne(() => Person)
  public person: Person;

  @Column({ default: "", type: "varchar", length: 400, nullable: false })
  @Max(400)
  @IsString()
  public characterName: string;

  @ManyToOne(() => Gender)
  public gender: Gender;

  @Column({ default: 0, type: "int", width: 5 })
  @IsInt()
  @Min(0)
  public castOrder: number;
}

export default MovieCast;

export { MovieCast };
