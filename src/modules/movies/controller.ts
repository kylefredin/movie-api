import { Controller, Get, Param, Query } from "@nestjs/common";
import { Movie } from "../../entity/Movie";
import { MovieService } from "./service";

@Controller("movies")
class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async findAll(@Query() query: any): Promise<Movie[]> {
    const { limit = 50, offset = 0 } = query;

    return this.movieService.findAll(limit, offset);
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Movie> {
    return this.movieService.findOne(id);
  }
}

export default MovieController;

export { MovieController };
