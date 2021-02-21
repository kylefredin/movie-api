import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { Movie } from "../../entity/Movie";

/**
 * Contains methods to perform CRUD operations on Movie entities
 */
@Injectable()
class MovieService {
  /**
   * @param {Repository<Movie>} movieRepository
   */
  constructor(
    @Inject("MOVIE_REPOSITORY")
    private movieRepository: Repository<Movie>,
  ) {}

  /**
   * Returns the number of movie records currently in the repository
   *
   * @return {Promise<number>}
   */
  async totalRecords(): Promise<number> {
    return this.movieRepository.count();
  }

  /**
   * Returns all records for the paginated set
   *
   * @param {PaginationDto} query
   * @return {Promise<[Movie[], number]>}
   */
  async findAll(query: PaginationDto): Promise<[Movie[], number]> {
    return this.movieRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getManyAndCount();
  }

  /**
   * Returns the movie using the provided identifier
   *
   * @param {number} id
   * @return {Promise<Movie>}
   */
  async findOne(id: number): Promise<Movie | undefined> {
    return this.movieRepository.findOne(id, {
      relations: ["genres", "keywords", "companies"],
    });
  }

  /**
   * Creates a movie using the provided payload
   *
   * @param {Movie} movie
   * @return {Promise<Movie>}
   */
  async create(movie: Movie): Promise<Movie> {
    return this.movieRepository.save(movie);
  }

  /**
   * Updates an existing movie using the provided id and payload
   *
   * @param {Movie} movie
   * @return {Promise<Movie>}
   */
  async update(id: number, movie: Movie): Promise<Movie> {
    await this.movieRepository
      .createQueryBuilder()
      .update(Movie)
      .set(movie)
      .where("id = :id", { id })
      .execute();

    return (this.movieRepository.findOne(id) as unknown) as Movie;
  }
}

export default MovieService;

export { MovieService };
