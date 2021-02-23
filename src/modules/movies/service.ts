import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { Movie } from "../../entity/Movie";
import { UrlService } from "../url/service";

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
    private urlService: UrlService,
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
    const [
      movies,
      count,
    ] = await this.movieRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getManyAndCount();

    movies.forEach((movie: Movie) => {
      movie.links = this.urlService.getRecordLinksDto("/movies", movie.id);
    });

    return [movies, count];
  }

  /**
   * Returns the movie using the provided identifier
   *
   * @param {number} id
   * @return {Promise<Movie>}
   */
  async findOne(id: number): Promise<Movie | undefined> {
    const movie = await this.movieRepository.findOne(id, {
      relations: ["genres", "keywords", "companies"],
    });

    if (!movie) {
      return movie;
    }

    movie.links = this.urlService.getRecordLinksDto("/movies", movie.id);

    return movie;
  }

  /**
   * Creates a movie using the provided payload
   *
   * @param {Movie} movie
   * @return {Promise<Movie>}
   */
  async create(movie: Movie): Promise<Movie> {
    const entity = await this.movieRepository.save(movie);

    entity.links = this.urlService.getRecordLinksDto("/movies", entity.id);

    return entity;
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

    return (this.findOne(id) as unknown) as Movie;
  }
}

export default MovieService;

export { MovieService };
