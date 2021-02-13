import { Module } from "@nestjs/common";
import { CompanyController } from "./controller";
import { CompanyService } from "./service";
import { companyProviders } from "./provider";
import { DatabaseModule } from "../../database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [...companyProviders, CompanyService],
})
class CompanyModule {}

export default CompanyModule;

export { CompanyModule };
