import { Country } from "../entity/Country";
import { MetaDto } from "./meta.dto";
import { LinksDto } from "./links.dto";

/**
 * Represents a list of countries
 */
class CountriesDto {
  /**
   * @type {Country[]}
   */
  public countries: Country[] = [];

  /**
   * @type {MetaDto}
   */
  public meta: MetaDto = new MetaDto();

  /**
   * @type {LinksDto}
   */
  public links: LinksDto = new LinksDto();
}

export default CountriesDto;

export { CountriesDto };
