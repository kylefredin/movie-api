import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/module";
import { CompanyModule } from "./modules/companies/module";
import { CountryModule } from "./modules/countries/module";
import { MovieModule } from "./modules/movies/module";

@Module({
  imports: [CompanyModule, CountryModule, DatabaseModule, MovieModule],
})
class AppModule {}

export default AppModule;

export { AppModule };
