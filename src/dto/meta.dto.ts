import { IsInt, Max, Min } from "class-validator";

import { DEFAULT_PAGE, DEFAULT_PER_PAGE, MAXIMUM_PER_PAGE } from "../constants";

const defaultPage = Number(DEFAULT_PAGE);
const defaultPerPage = Number(DEFAULT_PER_PAGE);
const maximumPerPage = Number(MAXIMUM_PER_PAGE);

/**
 * Represents pagination metadata
 */
class MetaDto {
  /**
   * The total number of records
   *
   * @type {number}
   */
  @IsInt()
  @Min(0)
  totalRecords: number = 0;

  /**
   * The current page
   *
   * @type {number}
   */
  @IsInt()
  @Min(1)
  currentPage: number = defaultPage;

  /**
   * The number of results per page
   *
   * @type {number}
   */
  @IsInt()
  @Min(1)
  @Max(maximumPerPage)
  perPage: number = defaultPerPage;

  /**
   * The total number of pages, based on total records and records per page
   *
   * @type {number}
   */
  @IsInt()
  @Min(0)
  get totalPages(): number {
    if (!this.totalRecords) {
      return 0;
    }

    return Math.ceil(this.totalRecords / this.perPage);
  }
}

export default MetaDto;

export { MetaDto };
