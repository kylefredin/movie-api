import { ProductionCompany } from "../entity/ProductionCompany";
import { LinksDto } from "./links.dto";
import { MetaDto } from "./meta.dto";

class ProductionCompaniesDto {
  companies: ProductionCompany[];

  meta: MetaDto = new MetaDto();

  links: LinksDto = new LinksDto();
}

export default ProductionCompaniesDto;

export { ProductionCompaniesDto };
