import { LinksDto } from "src/dto/links.dto";
import { UrlService } from "./service";

describe("UrlService", () => {
  describe("getLinksDto method", () => {
    it("should return empty links by default", () => {
      const service = new UrlService();

      const links: LinksDto = service.getLinksDto({
        path: "/test",
        totalPages: 0,
        currentPage: 0,
        perPage: 0,
      });

      expect(links.first).toBeNull();
      expect(links.last).toBeNull();
      expect(links.next).toBeNull();
      expect(links.prev).toBeNull();
    });

    it("should return correct next and last links", () => {
      const service = new UrlService();

      const links: LinksDto = service.getLinksDto({
        path: "/test",
        totalPages: 2,
        currentPage: 1,
        perPage: 10,
      });

      expect(links.first).toBeNull();
      expect(links.last).toStrictEqual(
        "http://localhost:3000/test?page=2&perPage=10",
      );
      expect(links.next).toStrictEqual(
        "http://localhost:3000/test?page=2&perPage=10",
      );
      expect(links.prev).toBeNull();
    });

    it("should return correct first and prev links", () => {
      const service = new UrlService();

      const links: LinksDto = service.getLinksDto({
        path: "/test",
        totalPages: 2,
        currentPage: 2,
        perPage: 10,
      });

      expect(links.first).toStrictEqual(
        "http://localhost:3000/test?page=1&perPage=10",
      );
      expect(links.last).toBeNull();
      expect(links.next).toBeNull();
      expect(links.prev).toStrictEqual(
        "http://localhost:3000/test?page=1&perPage=10",
      );
    });

    it("should return correct links", () => {
      const service = new UrlService();

      const links: LinksDto = service.getLinksDto({
        path: "/test",
        totalPages: 5,
        currentPage: 2,
        perPage: 10,
      });

      expect(links.first).toStrictEqual(
        "http://localhost:3000/test?page=1&perPage=10",
      );
      expect(links.last).toStrictEqual(
        "http://localhost:3000/test?page=5&perPage=10",
      );
      expect(links.next).toStrictEqual(
        "http://localhost:3000/test?page=3&perPage=10",
      );
      expect(links.prev).toStrictEqual(
        "http://localhost:3000/test?page=1&perPage=10",
      );
    });
  });

  describe("getFirstLink method", () => {
    it("should return correct string", () => {
      const service = new UrlService();

      const first = service.getFirstLink("/test", 10);

      expect(first).toStrictEqual(
        "http://localhost:3000/test?page=1&perPage=10",
      );
    });
  });

  describe("getNextLink method", () => {
    it("should return correct string", () => {
      const service = new UrlService();

      const next = service.getNextLink("/test", 1, 10);

      expect(next).toStrictEqual(
        "http://localhost:3000/test?page=2&perPage=10",
      );
    });
  });

  describe("getPreviousLink method", () => {
    it("should return correct string", () => {
      const service = new UrlService();

      const previous = service.getPreviousLink("/test", 2, 10);

      expect(previous).toStrictEqual(
        "http://localhost:3000/test?page=1&perPage=10",
      );
    });

    it("should return ensure page is not less than 1", () => {
      const service = new UrlService();

      const previous = service.getPreviousLink("/test", 0, 10);

      expect(previous).toStrictEqual(
        "http://localhost:3000/test?page=1&perPage=10",
      );
    });
  });

  describe("getLastLink method", () => {
    it("should return correct string", () => {
      const service = new UrlService();

      const last = service.getLastLink("/test", 2, 10);

      expect(last).toStrictEqual(
        "http://localhost:3000/test?page=2&perPage=10",
      );
    });
  });
});
