import React, { useEffect, useState, useRef } from "react";
import { AccordionChild } from "../../components/accordion/accordion.types";
import { Accordion } from "../../components/accordion/accordion.component";
import { getProducts } from "../../clients/aesop.client";
import { Category, ProductsResponse } from "../../clients/response.types";

export const ShopRoute: React.FunctionComponent = () => {
  const [products, updateProducts] = useState<ProductsResponse>();
  const itemCount = useRef(0);

  useEffect(() => {
    getProducts().then((response) => updateProducts(response));
  }, []);

  const generateAccordion = (categories: Category[], groupName: string) => {
    const accordionChildren: AccordionChild[] = [];

    categories.forEach((category) => {
      itemCount.current++;
      let itemBody: React.ReactNode;

      if (category.items) {
        itemBody = generateAccordion(category.items, category.name);
      } else {
        itemBody = <>View more</>;
      }

      accordionChildren.push({
        title: category.name,
        body: itemBody,
        itemCount: itemCount.current,
      });
    });

    return <Accordion groupName={groupName} children={accordionChildren} />;
  };

  return (
    <>{products && generateAccordion(products.categories, "categories")}</>
  );
};
