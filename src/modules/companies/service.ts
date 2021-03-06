import { Injectable, Inject } from "@nestjs/common";
import { Repositories } from "src/enums";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { ProductionCompany } from "../../entity/ProductionCompany";
import { UrlService } from "../url/service";

/**
 * Contains methods to perform CRUD operations on Company entities
 */
@Injectable()
class CompanyService {
  /**
   * @param {Repository<ProductionCompany>} companyRepository
   */
  public constructor(
    @Inject(Repositories.company)
    private readonly companyRepository: Repository<ProductionCompany>,
    private readonly urlService: UrlService,
  ) {}

  /**
   * Returns the number of production company records currently in the repository
   *
   * @return {Promise<number>}
   */
  public async totalRecords(): Promise<number> {
    return this.companyRepository.count();
  }

  /**
   * Returns all records for the paginated set
   *
   * @param {PaginationDto} query
   * @return {Promise<[ProductionCompany[], number]>}
   */
  public async findAll(
    query: PaginationDto,
  ): Promise<[ProductionCompany[], number]> {
    const [
      companies,
      count,
    ] = await this.companyRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getManyAndCount();

    companies.forEach((company: ProductionCompany) => {
      company.links = this.urlService.getRecordLinksDto(
        "/companies",
        company.id,
      );
    });

    return [companies, count];
  }

  /**
   * Returns the production company using the provided identifier
   *
   * @param {number} id
   * @return {Promise<ProductionCompany | undefined>}
   */
  public async findOne(id: number): Promise<ProductionCompany | undefined> {
    const company = await this.companyRepository.findOne(id);

    if (!company) {
      return company;
    }

    company.links = this.urlService.getRecordLinksDto("/companies", company.id);

    return company;
  }
}

export default CompanyService;

export { CompanyService };
