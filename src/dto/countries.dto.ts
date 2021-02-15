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
  countries: Country[] = [];

  /**
   * @type {MetaDto}
   */
  meta: MetaDto = new MetaDto();

  /**
   * @type {LinksDto}
   */
  links: LinksDto = new LinksDto();
}

export default CountriesDto;

export { CountriesDto };
