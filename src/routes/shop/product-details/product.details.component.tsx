import React from "react";
import { Product } from "../../../clients/response.types";
import { Accordion } from "../../../components/accordion/accordion.component";
import { AccordionChild } from "../../../components/accordion/accordion.types";
import "./product.details.style.scss";

export const ProductDetails: React.FunctionComponent<{ product: Product }> = ({
  product,
}) => {
  const { name: productName, variants } = product;
  const accordionChildren: AccordionChild[] = [];

  variants.forEach(({ name, imageAlt, price }, index) => {
    accordionChildren.push({
      title: name,
      body: (
        <>
          {imageAlt}
          <br />
          Price: {price}
        </>
      ),
      itemCount: index,
    });
  });

  return (
    <div className="product-details-container">
      <h3>{productName}</h3>
      <Accordion groupName={productName} children={accordionChildren} />
    </div>
  );
};
