import React, { useEffect, useState, useRef } from "react";
import { Menu, Sidebar } from "semantic-ui-react";

import { AccordionChild } from "../../components/accordion/accordion.types";
import { Accordion } from "../../components/accordion/accordion.component";
import { getProducts } from "../../clients/aesop.client";
import {
  Category,
  ProductsResponse,
  Product,
} from "../../clients/response.types";
import { ProductDetails } from "./product-details/product.details.component";

export const ShopRoute: React.FunctionComponent = () => {
  const [products, updateProducts] = useState<ProductsResponse>();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedProduct, updateSelectedProduct] = useState<Product>();
  const itemCount = useRef(0);

  useEffect(() => {
    getProducts().then((response) => updateProducts(response));
  }, []);

  const onProductClick = (product: Product) => {
    updateSelectedProduct(product);
    setIsMenuVisible(true);
  };

  const generateAccordion = (categories: Category[], groupName: string) => {
    const accordionChildren: AccordionChild[] = [];

    categories.forEach((category) => {
      itemCount.current++;
      let itemBody: React.ReactNode;

      if (category.items) {
        itemBody = generateAccordion(category.items, category.name);
      } else {
        itemBody = (
          <button
            onClick={() => onProductClick(category as Product)}
            className="btn btn-primary"
          >
            View more
          </button>
        );
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
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setIsMenuVisible(false)}
          vertical
          visible={isMenuVisible}
          width="very wide"
        >
          {selectedProduct && <ProductDetails product={selectedProduct} />}
        </Sidebar>

        <Sidebar.Pusher dimmed={isMenuVisible}>
          {products && generateAccordion(products.categories, "categories")}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};
