import React from "react";
import { render, RenderResult, waitFor } from "@testing-library/react";
import { Accordion } from "./accordion.component";
import { AccordionChild } from "./accordion.types";

const accordionHeadingTestId = "accordion-item-button";
const accordionBodyTestId = "accordion-item-body";

describe(`Accordion component`, () => {
  let accordionChildren: AccordionChild[];

  describe(`when items bodies is plain text`, () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      accordionChildren = [
        { title: "1", body: "hello world" },
        { title: "2", body: "hello world again" },
        { title: "3", body: "hello world again again" },
      ];
      renderResult = render(
        <Accordion groupName="group 1" children={accordionChildren} />
      );
    });

    it(`should render the correct number of items`, () => {
      const { queryAllByTestId } = renderResult;

      expect(queryAllByTestId(accordionHeadingTestId).length).toEqual(
        accordionChildren.length
      );
    });

    it(`should render with all items collapsed`, () => {
      const { queryAllByTestId } = renderResult;
      const itemBodies = queryAllByTestId(accordionBodyTestId);

      expect(itemBodies[0].classList).not.toContain("show");
      expect(itemBodies[1].classList).not.toContain("show");
      expect(itemBodies[2].classList).not.toContain("show");
    });

    it(`should expand an item when its label is clicked`, () => {
      const { queryAllByTestId } = renderResult;

      queryAllByTestId(accordionHeadingTestId)[1].click(); // second item click

      waitFor(() =>
        expect(queryAllByTestId(accordionBodyTestId)[1].classList).toContain(
          "show"
        )
      );
    });

    it(`should collapse other items when one is clicked`, () => {
      const { queryAllByTestId } = renderResult;

      queryAllByTestId(accordionHeadingTestId)[0].click(); // first item expanded
      queryAllByTestId(accordionHeadingTestId)[2].click(); // third item expanded

      waitFor(() =>
        expect(
          queryAllByTestId(accordionBodyTestId)[0].classList
        ).not.toContain("show")
      );
    });
  });

  describe(`when an item has a component as a body`, () => {
    const BodyComponent = <h2 data-testid="my-nested-component">Hello</h2>;

    beforeEach(() => {
      accordionChildren = [
        {
          title: "An item with nested component",
          body: BodyComponent,
        },
      ];
    });

    it(`should render the nested component`, () => {
      const { findByTestId } = render(
        <Accordion groupName="test-name" children={accordionChildren} />
      );

      expect(findByTestId("my-nested-component"));
    });
  });
});
