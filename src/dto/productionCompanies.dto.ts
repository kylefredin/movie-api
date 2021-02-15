import { ProductionCompany } from "../entity/ProductionCompany";
import { LinksDto } from "./links.dto";
import { MetaDto } from "./meta.dto";

/**
 * Represents a list of production companies
 */
class ProductionCompaniesDto {
  /**
   * @type {ProductionCompany[]}
   */
  companies: ProductionCompany[];

  /**
   * @type {MetaDto}
   */
  meta: MetaDto = new MetaDto();

  /**
   * @type {LinksDto}
   */
  links: LinksDto = new LinksDto();
}

export default ProductionCompaniesDto;

export { ProductionCompaniesDto };
