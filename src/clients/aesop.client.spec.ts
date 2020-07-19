import * as axios from "axios";

import { getProducts } from "./aesop.client";

jest.mock("axios");

describe(`Aesop Http Client`, () => {
  describe(`getProducts`, () => {
    const mockResponse = {
      data: {
        test: "Ok",
      },
    };

    beforeEach(() => {
      axios.get.mockImplementation(() => Promise.resolve(mockResponse));
    });

    it(`should return the data of the response`, async () => {
      await expect(getProducts()).resolves.toEqual(mockResponse.data);
    });

    it(`should call the correct endpoint`, () => {
      getProducts().then();

      expect(axios.get).toHaveBeenCalledWith("//localhost:3000/nav/shop");
    });
  });
});
