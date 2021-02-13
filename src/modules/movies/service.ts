import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Movie } from "../../entity/Movie";

@Injectable()
class MovieService {
  constructor(
    @Inject("MOVIE_REPOSITORY")
    private movieRepository: Repository<Movie>
  ) {}

  async findAll(limit: number, offset: number): Promise<Movie[]> {
    return this.movieRepository
      .createQueryBuilder()
      .skip(offset)
      .take(limit)
      .getMany();
  }

  async findOne(id: number): Promise<Movie> {
    return this.movieRepository.findOne(id);
  }
}

export default MovieService;

export { MovieService };
