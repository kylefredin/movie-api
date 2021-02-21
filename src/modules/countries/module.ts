import { Module } from "@nestjs/common";
import { CountryController } from "./controller";
import { CountryService } from "./service";
import { countryProviders } from "./provider";
import { DatabaseModule } from "../../database/module";
import { UrlService } from "../url/service";

@Module({
  imports: [DatabaseModule],
  controllers: [CountryController],
  providers: [...countryProviders, CountryService, UrlService],
})
class CountryModule {}

export default CountryModule;

export { CountryModule };
