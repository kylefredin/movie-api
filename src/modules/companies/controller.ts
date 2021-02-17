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

/**
 * API controller for Production Company routes
 */
@Controller("companies")
class CompanyController {
  /**
   * @param {CompanyService} companyService
   */
  constructor(private companyService: CompanyService) {}

  /**
   * GET /companies route handler
   *
   * @param {PaginationDto} query
   * @return {Promise<ProductionCompaniesDto>}
   */
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

  /**
   * GET /companies/:id route handler
   *
   * @param {number} id
   * @return {Promise<ProductionCompanyDto>}
   */
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
