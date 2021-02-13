import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Country } from "../../entity/Country";

@Injectable()
class CountryService {
  constructor(
    @Inject("COUNTRY_REPOSITORY")
    private countryRepository: Repository<Country>
  ) {}

  async findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  async findOne(id: number): Promise<Country> {
    return this.countryRepository.findOne(id);
  }
}

export default CountryService;

export { CountryService };
