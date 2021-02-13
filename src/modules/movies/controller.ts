import { Controller, Get, Param } from "@nestjs/common";
import { Movie } from "../../entity/Movie";
import { MovieService } from "./service";

@Controller("movies")
class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(":id")
  async findOne(@Param() params: any): Promise<Movie> {
    return this.movieService.findOne(params.id);
  }
}

export default MovieController;

export { MovieController };
