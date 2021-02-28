import { Test, TestingModule } from "@nestjs/testing";
import { Repositories } from "../../enums";
import { UrlService } from "../url/service";
import { CountryService } from "./service";

describe("CountryService", () => {
  describe("totalRecords", () => {
    let countryService: CountryService;

    beforeEach(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        providers: [
          {
            provide: Repositories.Country,
            useFactory: (): any => ({ count: (): number => 1 }),
          },
          CountryService,
          UrlService,
        ],
      }).compile();

      countryService = moduleRef.get<CountryService>(CountryService);
    });

    it("should return the item count", async () => {
      expect(await countryService.totalRecords()).toStrictEqual(1);
    });
  });
});
