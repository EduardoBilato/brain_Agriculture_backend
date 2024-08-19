import { jest } from "@jest/globals";
import { beforeEach, describe, it } from "node:test";
import { CultureController } from "../controllers/CultureController";
import { CultureService } from "../service/CultureService";
import { Request, Response } from "express";

describe("CultureController", () => {
  let cultureController: CultureController;
  let cultureService: CultureService;

  beforeEach(() => {
    cultureService = new CultureService();
    cultureController = new CultureController();
  });

  describe("getCultureList", () => {
    it("should return a list of cultures with status 200", async () => {
      const mockCultureList = [
        { id: "1", name: "Soja" },
        { id: "2", name: "Milho" },
      ];
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
      const mockRequest = {} as Request;

      jest
        .spyOn(cultureService, "getCultureList")
        .mockResolvedValue(mockCultureList);

      await cultureController.getCultureList(mockRequest, mockResponse);

      expect(cultureService.getCultureList).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockCultureList);
    });

    it("should handle errors and return status 400", async () => {
      const mockError = new Error("Something went wrong");
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      } as unknown as Response;
      const mockRequest = {} as Request;

      jest.spyOn(cultureService, "getCultureList").mockRejectedValue(mockError);

      await cultureController.getCultureList(mockRequest, mockResponse);

      expect(cultureService.getCultureList).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: mockError.message,
      });
    });
  });
});
