import { IsInt, Max, Min } from "class-validator";
import { Transform } from "class-transformer";

import { DEFAULT_PAGE, DEFAULT_PER_PAGE, MAXIMUM_PER_PAGE } from "../constants";

const defaultPage = Number(DEFAULT_PAGE);
const defaultPerPage = Number(DEFAULT_PER_PAGE);
const maximumPerPage = Number(MAXIMUM_PER_PAGE);

class PaginationDto {
  @Transform(({ value }) => (isFinite(value) ? Number(value) : value))
  @IsInt()
  @Min(1)
  page: number = defaultPage;

  @Transform(({ value }) => (isFinite(value) ? Number(value) : value))
  @IsInt()
  @Min(1)
  @Max(maximumPerPage)
  perPage: number = defaultPerPage;

  get limit(): number {
    return this.perPage;
  }

  get offset(): number {
    if (this.page < 2) {
      return 0;
    }

    return Math.floor(this.page * this.perPage);
  }
}

export default PaginationDto;

export { PaginationDto };
