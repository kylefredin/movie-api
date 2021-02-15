/**
 * Represents pagination links
 */
class LinksDto {
  /**
   * The previous page of results
   *
   * @type {string | null}
   */
  prev: string | null = null;

  /**
   * The next page of results
   *
   * @type {string | null}
   */
  next: string | null = null;

  /**
   * The first page of results
   *
   * @type {string | null}
   */
  first: string | null = null;

  /**
   * The last page of results
   *
   * @type {string | null}
   */
  last: string | null = null;
}

export default LinksDto;

export { LinksDto };
