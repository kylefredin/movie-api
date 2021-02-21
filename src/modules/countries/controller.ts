import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CountryDto } from "../../dto/country.dto";
import { CountriesDto } from "../../dto/countries.dto";
import { PaginationDto } from "../../dto/pagination.dto";
import { CountryService } from "./service";
import { Country } from "../../entity/Country";
import { UrlService } from "../url/service";

/**
 * API controller for Country routes
 */
@Controller("countries")
class CountryController {
  /**
   * @param {CountryService} countryService
   */
  constructor(
    private countryService: CountryService,
    private urlService: UrlService,
  ) {}

  /**
   * GET /countries route handler
   *
   * @param {PaginationDto} query
   * @return {Promise<CountriesDto>}
   */
  @Get()
  async findAll(@Query() query: PaginationDto): Promise<CountriesDto> {
    const response = new CountriesDto();

    response.countries = await this.countryService.findAll(query);

    const totalRecords = await this.countryService.totalRecords();

    response.meta.totalRecords = totalRecords;
    response.meta.currentPage = query.page;
    response.meta.perPage = query.perPage;

    response.links = this.urlService.createLinks(
      "/countries",
      totalRecords,
      query.page,
      query.perPage,
    );

    return response;
  }

  /**
   * GET /countries/:id route handler
   *
   * @param {number} id
   * @return {Promise<CountryDto>}
   */
  @Get(":id")
  async findOne(@Param("id") id: number): Promise<CountryDto> {
    const country = await this.countryService.findOne(id);

    if (!country) {
      throw new HttpException("Country not found", HttpStatus.NOT_FOUND);
    }

    const response = new CountryDto();

    response.country = country;

    return response;
  }

  /**
   * POST /countries route handler
   *
   * @param {Country} body
   * @return {Promise<CountryDto>}
   */
  @Post()
  async create(@Body() body: Country): Promise<CountryDto> {
    const country = await this.countryService.create(body);

    const response = new CountryDto();

    response.country = country;

    return response;
  }

  /**
   * PUT /countries/:id route handler
   *
   * @param {Country} body
   * @return {Promise<CountryDto>}
   */
  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() body: Country,
  ): Promise<CountryDto> {
    const country = await this.countryService.findOne(id);

    if (!country) {
      throw new HttpException("Country not found", HttpStatus.NOT_FOUND);
    }

    const response = new CountryDto();

    response.country = await this.countryService.update(id, body);

    return response;
  }
}

export default CountryController;

export { CountryController };
