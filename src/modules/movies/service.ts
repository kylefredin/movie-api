import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Movie } from "../../entity/Movie";

@Injectable()
class MovieService {
  constructor(
    @Inject("MOVIE_REPOSITORY")
    private movieRepository: Repository<Movie>
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: number): Promise<Movie> {
    return this.movieRepository.findOne(id);
  }
}

export default MovieService;

export { MovieService };
