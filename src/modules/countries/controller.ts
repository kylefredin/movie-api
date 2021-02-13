import { Controller, Get, Param } from "@nestjs/common";
import { Country } from "../../entity/Country";
import { CountryService } from "./service";

@Controller("countries")
class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  async findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }

  @Get(":id")
  async findOne(@Param() params: any): Promise<Country> {
    return this.countryService.findOne(params.id);
  }
}

export default CountryController;

export { CountryController };
