import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { ProductionCompany } from "../../entity/ProductionCompany";

/**
 * Contains methods to perform CRUD operations on Company entities
 */
@Injectable()
class CompanyService {
  /**
   * @param {Repository<ProductionCompany>} companyRepository
   */
  constructor(
    @Inject("COMPANY_REPOSITORY")
    private companyRepository: Repository<ProductionCompany>
  ) {}

  /**
   * Returns the number of production company records currently in the repository
   *
   * @return {Promise<number>}
   */
  async totalRecords(): Promise<number> {
    return this.companyRepository.count();
  }

  /**
   * Returns all records for the paginated set
   *
   * @param {PaginationDto} query
   * @return {Promise<ProductionCompany[]>}
   */
  async findAll(query: PaginationDto): Promise<ProductionCompany[]> {
    return this.companyRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getMany();
  }

  /**
   * Returns the production company using the provided identifier
   *
   * @param {number} id
   * @return {Promise<ProductionCompany | undefined>}
   */
  async findOne(id: number): Promise<ProductionCompany | undefined> {
    return this.companyRepository.findOne(id);
  }
}

export default CompanyService;

export { CompanyService };
