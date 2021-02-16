import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { Country } from "../../entity/Country";

/**
 * Contains methods to perform CRUD operations on Country entities
 */
@Injectable()
class CountryService {
  /**
   * @param {countryRepository}
   */
  constructor(
    @Inject("COUNTRY_REPOSITORY")
    private countryRepository: Repository<Country>
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
   * @return {Promise<Country[]>}
   */
  async findAll(query: PaginationDto): Promise<Country[]> {
    return this.countryRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getMany();
  }

  /**
   * Returns a country by identifier
   *
   * @param {number} id
   * @return {Promise<Country>}
   */
  async findOne(id: number): Promise<Country | undefined> {
    return this.countryRepository.findOne(id, {
      relations: ["movies"],
    });
  }

  /**
   * Creates a country using the provided payload
   *
   * @param {country} country
   * @return {Promise<Country>}
   */
  async create(country: Country): Promise<Country> {
    return this.countryRepository.save(country);
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

    return (this.countryRepository.findOne(id, {
      relations: ["movies"],
    }) as unknown) as Country;
  }
}

export default CountryService;

export { CountryService };
