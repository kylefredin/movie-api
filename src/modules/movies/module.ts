import { Module } from "@nestjs/common";
import { MovieController } from "./controller";
import { MovieService } from "./service";
import { movieProviders } from "./provider";
import { DatabaseModule } from "../../database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [...movieProviders, MovieService],
})
class MovieModule {}

export default MovieModule;

export { MovieModule };
