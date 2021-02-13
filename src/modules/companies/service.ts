import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProductionCompany } from "../../entity/ProductionCompany";

@Injectable()
class CompanyService {
  constructor(
    @Inject("COMPANY_REPOSITORY")
    private companyRepository: Repository<ProductionCompany>
  ) {}

  async findAll(): Promise<ProductionCompany[]> {
    return this.companyRepository.find();
  }
}

export default CompanyService;

export { CompanyService };
