import { Test, TestingModule } from "@nestjs/testing";
import { CountryService } from "./service";

describe("CountryService", () => {
  describe("totalRecords", () => {
    let countryService: CountryService;

    beforeEach(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        providers: [
          {
            provide: "COUNTRY_REPOSITORY",
            useFactory: () => ({ count: () => 1 }),
          },
          CountryService,
        ],
      }).compile();

      countryService = moduleRef.get<CountryService>(CountryService);
    });

    it("should return the item count", async () => {
      expect(await countryService.totalRecords()).toStrictEqual(1);
    });
  });
});
