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
  public companies: ProductionCompany[];

  /**
   * @type {MetaDto}
   */
  public meta: MetaDto = new MetaDto();

  /**
   * @type {LinksDto}
   */
  public links: LinksDto = new LinksDto();
}

export default ProductionCompaniesDto;

export { ProductionCompaniesDto };
