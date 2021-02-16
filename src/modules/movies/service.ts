import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { Movie } from "../../entity/Movie";

@Injectable()
class MovieService {
  constructor(
    @Inject("MOVIE_REPOSITORY")
    private movieRepository: Repository<Movie>
  ) {}

  async totalRecords(): Promise<number> {
    return this.movieRepository.count();
  }

  async findAll(query: PaginationDto): Promise<Movie[]> {
    return this.movieRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getMany();
  }

  async findOne(id: number): Promise<Movie | undefined> {
    return this.movieRepository.findOne(id, {
      relations: ["genres", "keywords", "companies"],
    });
  }
}

export default MovieService;

export { MovieService };
