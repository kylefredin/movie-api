import { Module } from "@nestjs/common";
import { CompanyController } from "./controller";
import { CompanyService } from "./service";
import { companyProviders } from "./provider";
import { DatabaseModule } from "../../database/module";
import { UrlService } from "../url/service";

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [...companyProviders, CompanyService, UrlService],
})
class CompanyModule {}

export default CompanyModule;

export { CompanyModule };
