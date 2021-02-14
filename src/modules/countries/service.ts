import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { Country } from "../../entity/Country";

@Injectable()
class CountryService {
  constructor(
    @Inject("COUNTRY_REPOSITORY")
    private countryRepository: Repository<Country>
  ) {}

  async totalRecords(): Promise<number> {
    return this.countryRepository.count();
  }

  async findAll(query: PaginationDto): Promise<Country[]> {
    return this.countryRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getMany();
  }

  async findOne(id: number): Promise<Country> {
    return this.countryRepository.findOne(id);
  }
}

export default CountryService;

export { CountryService };
