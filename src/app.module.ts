import { Module } from "@nestjs/common";
import { CompanyModule } from "./modules/companies/module";
import { CountryModule } from "./modules/countries/module";
import { DatabaseModule } from "./database/module";

@Module({
  imports: [CompanyModule, CountryModule, DatabaseModule],
})
class AppModule {}

export default AppModule;

export { AppModule };
