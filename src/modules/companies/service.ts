import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { PaginationDto } from "../../dto/pagination.dto";
import { ProductionCompany } from "../../entity/ProductionCompany";

@Injectable()
class CompanyService {
  constructor(
    @Inject("COMPANY_REPOSITORY")
    private companyRepository: Repository<ProductionCompany>
  ) {}

  async totalRecords(): Promise<number> {
    return this.companyRepository.count();
  }

  async findAll(query: PaginationDto): Promise<ProductionCompany[]> {
    return this.companyRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getMany();
  }

  async findOne(id: number): Promise<ProductionCompany> {
    return this.companyRepository.findOne(id);
  }
}

export default CompanyService;

export { CompanyService };
