import { Controller, Get } from "@nestjs/common";
import { ProductionCompany } from "../../entity/ProductionCompany";
import { CompanyService } from "./service";

@Controller("companies")
class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  async findAll(): Promise<ProductionCompany[]> {
    return this.companyService.findAll();
  }
}

export default CompanyController;

export { CompanyController };
