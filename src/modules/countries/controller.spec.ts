import { HttpException, HttpStatus } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { CountryDto } from "../../dto/country.dto";
import { CountriesDto } from "../../dto/countries.dto";
import { PaginationDto } from "../../dto/pagination.dto";
import { Country } from "../../entity/Country";
import { UrlService } from "../url/service";
import { CountryController } from "./controller";
import { CountryService } from "./service";

describe("CountryController", () => {
  let countryController: CountryController;
  let countryService: CountryService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [
        {
          provide: "COUNTRY_REPOSITORY",
          useFactory: () => {},
        },
        CountryService,
        UrlService,
      ],
    }).compile();

    countryService = moduleRef.get<CountryService>(CountryService);
    countryController = moduleRef.get<CountryController>(CountryController);
  });

  describe("findAll", () => {
    it("should return an empty response if repository is empty", async () => {
      const serviceResponse: Country[] = [];

      jest
        .spyOn(countryService, "findAll")
        .mockResolvedValue([serviceResponse, serviceResponse.length]);

      const query = new PaginationDto();

      const response = new CountriesDto();
      response.countries = serviceResponse;

      response.meta.totalRecords = 0;
      response.meta.currentPage = query.page;
      response.meta.perPage = query.perPage;

      expect(await countryController.findAll(query)).toStrictEqual(response);
    });

    it("should return countries in the repository", async () => {
      const serviceResponse: Country[] = [
        { id: 1, isoCode: "AB", name: "Test" },
      ];

      jest
        .spyOn(countryService, "findAll")
        .mockResolvedValue([serviceResponse, serviceResponse.length]);

      const query = new PaginationDto();

      const response = new CountriesDto();
      response.countries = serviceResponse;

      response.meta.totalRecords = 1;
      response.meta.currentPage = query.page;
      response.meta.perPage = query.perPage;

      expect(await countryController.findAll(query)).toStrictEqual(response);
    });
  });

  describe("findOne", () => {
    it("should throw an error if id is not found", () => {
      jest.spyOn(countryService, "findOne").mockResolvedValue(undefined);

      expect(async () => countryController.findOne(0)).rejects.toThrowError(
        new HttpException("Country not found", HttpStatus.NOT_FOUND),
      );
    });

    it("should return the found country", async () => {
      const country = { id: 1, isoCode: "AB", name: "Test" };

      jest.spyOn(countryService, "findOne").mockResolvedValue(country);

      const response = new CountryDto();
      response.country = country;

      expect(await countryController.findOne(1)).toStrictEqual(response);
    });
  });

  describe("create", () => {
    it("should return the created country", async () => {
      const countryRequest = { isoCode: "AB", name: "Test" } as Country;
      const countryResponse = { id: 1, isoCode: "AB", name: "Test" };

      jest.spyOn(countryService, "create").mockResolvedValue(countryResponse);

      const response = new CountryDto();
      response.country = countryResponse;

      expect(await countryController.create(countryRequest)).toStrictEqual(
        response,
      );
    });
  });

  describe("update", () => {
    it("should throw an error if id is not found", () => {
      const country = { id: 1, isoCode: "AB", name: "Test" };

      jest.spyOn(countryService, "findOne").mockResolvedValue(undefined);

      expect(async () =>
        countryController.update(0, country),
      ).rejects.toThrowError(
        new HttpException("Country not found", HttpStatus.NOT_FOUND),
      );
    });

    it("should return the updated country", async () => {
      const country = { id: 1, isoCode: "AB", name: "Test" };

      jest.spyOn(countryService, "findOne").mockResolvedValue(country);
      jest.spyOn(countryService, "update").mockResolvedValue(country);

      const response = new CountryDto();
      response.country = country;

      expect(await countryController.update(1, country)).toStrictEqual(
        response,
      );
    });
  });
});
