import { IsInt, Max, Min } from "class-validator";
import { Transform } from "class-transformer";

import { DEFAULT_PAGE, DEFAULT_PER_PAGE, MAXIMUM_PER_PAGE } from "../constants";

const defaultPage = Number(DEFAULT_PAGE);
const defaultPerPage = Number(DEFAULT_PER_PAGE);
const maximumPerPage = Number(MAXIMUM_PER_PAGE);

/**
 * Represents parameters to paginate a set of results
 */
class PaginationDto {
  /**
   * The current page
   *
   * @type {number}
   */
  @Transform(({ value }) => (isFinite(value) ? Number(value) : value))
  @IsInt()
  @Min(1)
  page: number = defaultPage;

  /**
   * The number of results per page
   *
   * @type {number}
   */
  @Transform(({ value }) => (isFinite(value) ? Number(value) : value))
  @IsInt()
  @Min(1)
  @Max(maximumPerPage)
  perPage: number = defaultPerPage;

  /**
   * Based on perPage, the number of items to limit the query to
   *
   * @type {number}
   */
  get limit(): number {
    return this.perPage;
  }

  /**
   * Based on page, the number of items to offset the query by
   *
   * @type {number}
   */
  get offset(): number {
    if (this.page < 2) {
      return 0;
    }

    return Math.floor(this.page * this.perPage);
  }
}

export default PaginationDto;

export { PaginationDto };
