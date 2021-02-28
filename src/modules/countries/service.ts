import { Injectable, Inject } from "@nestjs/common";
import { Repositories } from "../../enums";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { Country } from "../../entity/Country";
import { UrlService } from "../url/service";

/**
 * Contains methods to perform CRUD operations on Country entities
 */
@Injectable()
class CountryService {
  /**
   * @param {Repository<Country>} countryRepository
   */
  constructor(
    @Inject(Repositories.Country)
    private countryRepository: Repository<Country>,
    private urlService: UrlService,
  ) {}

  /**
   * Returns the number of country records currently in the repository
   *
   * @return {Promise<number>}
   */
  async totalRecords(): Promise<number> {
    return this.countryRepository.count();
  }

  /**
   * Returns all records for the paginated set
   *
   * @param {PaginationDto} query
   * @return {Promise<[Country[], number]>}
   */
  async findAll(query: PaginationDto): Promise<[Country[], number]> {
    const [
      countries,
      count,
    ] = await this.countryRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getManyAndCount();

    countries.forEach((country: Country) => {
      country.links = this.urlService.getRecordLinksDto(
        "/countries",
        country.id,
      );
    });

    return [countries, count];
  }

  /**
   * Returns the country using the provided identifier
   *
   * @param {number} id
   * @return {Promise<Country>}
   */
  async findOne(id: number): Promise<Country | undefined> {
    const country = await this.countryRepository.findOne(id);

    if (!country) {
      return country;
    }

    country.links = this.urlService.getRecordLinksDto("/countries", country.id);

    return country;
  }

  /**
   * Creates a country using the provided payload
   *
   * @param {country} country
   * @return {Promise<Country>}
   */
  async create(country: Country): Promise<Country> {
    const entity = await this.countryRepository.save(country);

    entity.links = this.urlService.getRecordLinksDto("/countries", entity.id);

    return entity;
  }

  /**
   * Updates an existing country using the provided id and payload
   *
   * @param {country} country
   * @return {Promise<Country>}
   */
  async update(id: number, country: Country): Promise<Country> {
    await this.countryRepository
      .createQueryBuilder()
      .update(Country)
      .set(country)
      .where("id = :id", { id })
      .execute();

    return (this.findOne(id) as unknown) as Country;
  }
}

export default CountryService;

export { CountryService };
