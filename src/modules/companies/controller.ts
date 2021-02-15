import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from "@nestjs/common";
import { PaginationDto } from "../../dto/pagination.dto";
import { ProductionCompaniesDto } from "../../dto/productionCompanies.dto";
import { ProductionCompanyDto } from "../../dto/productionCompany.dto";
import { CompanyService } from "./service";

@Controller("companies")
class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  async findAll(
    @Query() query: PaginationDto
  ): Promise<ProductionCompaniesDto> {
    const response = new ProductionCompaniesDto();

    response.companies = await this.companyService.findAll(query);

    response.meta.totalRecords = await this.companyService.totalRecords();
    response.meta.currentPage = query.page;
    response.meta.perPage = query.perPage;

    return response;
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<ProductionCompanyDto> {
    const company = await this.companyService.findOne(id);

    if (!company) {
      throw new HttpException("Company not found", HttpStatus.NOT_FOUND);
    }

    const response = new ProductionCompanyDto();

    response.company = company;

    return response;
  }
}

export default CompanyController;

export { CompanyController };
