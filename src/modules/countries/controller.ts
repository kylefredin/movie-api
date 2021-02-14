import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from "@nestjs/common";
import CountryDto from "../../dto/country.dto";
import CountriesDto from "../../dto/movies.dto";
import { PaginationDto } from "../../dto/pagination.dto";
import { Country } from "../../entity/Country";
import { CountryService } from "./service";

@Controller("countries")
class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  async findAll(@Query() query: PaginationDto): Promise<CountriesDto> {
    const response = new CountriesDto();

    response.countries = await this.countryService.findAll(query);

    response.meta.totalRecords = await this.countryService.totalRecords();
    response.meta.currentPage = query.page;
    response.meta.perPage = query.perPage;

    return response;
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<CountryDto> {
    const response = new CountryDto();

    response.country = await this.countryService.findOne(id);

    if (!response.country) {
      throw new HttpException("Country not found", HttpStatus.NOT_FOUND);
    }

    return response;
  }
}

export default CountryController;

export { CountryController };
