import { Test, TestingModule } from "@nestjs/testing";
import { CountriesDto } from "../../dto/countries.dto";
import { PaginationDto } from "../../dto/pagination.dto";
import { CountryController } from "./controller";
import { CountryService } from "./service";
import { countryProviders } from "./provider";
import { DatabaseModule } from "../../database/module";

describe("CountryController", () => {
  let countryController: CountryController;
  let countryService: CountryService;

  beforeEach(async () => {
    let moduleRef: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [CountryController],
      providers: [...countryProviders, CountryService],
    }).compile();

    countryService = moduleRef.get<CountryService>(CountryService);
    countryController = moduleRef.get<CountryController>(CountryController);
  });

  describe("findAll", () => {
    it("should return an array of countries", async () => {
      const serviceResponse = [{ id: 1, isoCode: "AB", name: "Test" }];

      jest
        .spyOn(countryService, "totalRecords")
        .mockResolvedValue(serviceResponse.length);

      jest.spyOn(countryService, "findAll").mockResolvedValue(serviceResponse);

      const query = new PaginationDto();

      const response = new CountriesDto();
      response.countries = serviceResponse;

      response.meta.totalRecords = 1;
      response.meta.currentPage = query.page;
      response.meta.perPage = query.perPage;

      expect(await countryController.findAll(query)).toBe(response);
    });
  });
});
