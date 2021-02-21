import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { UrlService } from "../url/service";
import { MovieDto } from "../../dto/movie.dto";
import { MoviesDto } from "../../dto/movies.dto";
import { PaginationDto } from "../../dto/pagination.dto";
import { Movie } from "../../entity/Movie";
import { MovieService } from "./service";

/**
 * API controller for Movie routes
 */
@Controller("movies")
class MovieController {
  /**
   * @param {MovieService} movieService
   */
  constructor(
    private movieService: MovieService,
    private urlService: UrlService,
  ) {}

  /**
   * GET /movies route handler
   *
   * @param {PaginationDto} query
   * @return {Promise<MoviesDto>}
   */
  @Get()
  async findAll(@Query() query: PaginationDto): Promise<MoviesDto> {
    const response = new MoviesDto();

    response.movies = await this.movieService.findAll(query);

    const totalRecords = await this.movieService.totalRecords();

    response.meta.totalRecords = totalRecords;
    response.meta.currentPage = query.page;
    response.meta.perPage = query.perPage;

    response.links = this.urlService.getLinksDto(
      "/movies",
      totalRecords,
      query.page,
      query.perPage,
    );

    return response;
  }

  /**
   * GET /movies/:id route handler
   *
   * @param {number} id
   * @return {Promise<MovieDto>}
   */
  @Get(":id")
  async findOne(@Param("id") id: number): Promise<MovieDto> {
    const movie = await this.movieService.findOne(id);

    if (!movie) {
      throw new HttpException("Movie not found", HttpStatus.NOT_FOUND);
    }

    const response = new MovieDto();

    response.movie = movie;

    return response;
  }

  /**
   * POST /movies route handler
   *
   * @param {Movie} body
   * @return {Promise<MovieDto>}
   */
  @Post()
  async create(@Body() body: Movie): Promise<MovieDto> {
    const movie = await this.movieService.create(body);

    const response = new MovieDto();

    response.movie = movie;

    return response;
  }

  /**
   * PUT /movies/:id route handler
   *
   * @param {Movie} body
   * @return {Promise<MovieDto>}
   */
  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() body: Movie,
  ): Promise<MovieDto> {
    const movie = await this.movieService.findOne(id);

    if (!movie) {
      throw new HttpException("Movie not found", HttpStatus.NOT_FOUND);
    }

    const response = new MovieDto();

    response.movie = await this.movieService.update(id, body);

    return response;
  }
}

export default MovieController;

export { MovieController };
