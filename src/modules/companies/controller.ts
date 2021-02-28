import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from "@nestjs/common";
import { UrlService } from "../url/service";
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
  public constructor(
    private companyService: CompanyService,
    private urlService: UrlService,
  ) {}

  /**
   * GET /companies route handler
   *
   * @param {PaginationDto} query
   * @return {Promise<ProductionCompaniesDto>}
   */
  @Get()
  public async findAll(
    @Query() query: PaginationDto,
  ): Promise<ProductionCompaniesDto> {
    const [companies, totalRecords] = await this.companyService.findAll(query);

    const response = new ProductionCompaniesDto();

    response.companies = companies;

    response.meta.totalRecords = totalRecords;
    response.meta.currentPage = query.page;
    response.meta.perPage = query.perPage;

    response.links = this.urlService.getLinksDto("/companies", response.meta);

    return response;
  }

  /**
   * GET /companies/:id route handler
   *
   * @param {number} id
   * @return {Promise<ProductionCompanyDto>}
   */
  @Get(":id")
  public async findOne(@Param("id") id: number): Promise<ProductionCompanyDto> {
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
