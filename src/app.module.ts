import { Module } from "@nestjs/common";
import { CompanyModule } from "./modules/companies/module";
import { DatabaseModule } from "./database/module";

@Module({
  imports: [CompanyModule, DatabaseModule],
})
class AppModule {}

export default AppModule;

export { AppModule };
