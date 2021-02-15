import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from "@nestjs/common";
import { MovieDto } from "../../dto/movie.dto";
import { MoviesDto } from "../../dto/movies.dto";
import { PaginationDto } from "../../dto/pagination.dto";
import { MovieService } from "./service";

@Controller("movies")
class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async findAll(@Query() query: PaginationDto): Promise<MoviesDto> {
    const response = new MoviesDto();

    response.movies = await this.movieService.findAll(query);

    response.meta.totalRecords = await this.movieService.totalRecords();
    response.meta.currentPage = query.page;
    response.meta.perPage = query.perPage;

    return response;
  }

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
}

export default MovieController;

export { MovieController };
