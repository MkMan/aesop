import React from "react";
import { render, RenderResult, waitFor } from "@testing-library/react";
import { ProductDetails } from "./product.details.component";
import { Product } from "../../../clients/response.types";

jest.mock("../../../components/accordion/accordion.component.tsx", () => {
  return {
    Accordion: () => (
      <div data-testid="accordion">Mock Accordion component</div>
    ),
  };
});

describe(`Product details component`, () => {
  let renderResult: RenderResult;

  const mockProduct: Product = {
    name: "hair cream",
    variants: [{ name: "100 ml", price: "$3", imageAlt: "this is nice" }],
  };

  beforeEach(() => {
    renderResult = render(<ProductDetails product={mockProduct} />);
  });

  it(`should render the product name`, () => {
    const { getByText } = renderResult;

    expect(getByText(mockProduct.name));
  });

  it(`should render an accordion`, () => {
    const { getByTestId } = renderResult;

    expect(getByTestId("accordion"));
  });
});
