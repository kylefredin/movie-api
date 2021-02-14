import { Country } from "../entity/Country";
import { MetaDto } from "./meta.dto";
import { LinksDto } from "./links.dto";

class CountriesDto {
  countries: Country[] = [];

  meta: MetaDto = new MetaDto();

  links: LinksDto = new LinksDto();
}

export default CountriesDto;

export { CountriesDto };
