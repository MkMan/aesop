import React from "react";
import { sanitiseForDom } from "../../utils/string.utils";
import { AccordionChild, AccordionGroupName } from "./accordion.types";

export const Accordion: React.FunctionComponent<
  AccordionGroupName & {
    children: AccordionChild[];
  }
> = ({ children, groupName }) => {
  const kebabGroupName = sanitiseForDom(groupName);

  return (
    <div className="accordion" id={kebabGroupName}>
      {children.map((item, index) => (
        <AccordionItem
          key={`accordion-item=${index}`}
          groupName={kebabGroupName}
          title={item.title}
          body={item.body}
          itemCount={item.itemCount}
        />
      ))}
    </div>
  );
};

const AccordionItem: React.FunctionComponent<
  AccordionChild & AccordionGroupName
> = ({ groupName, title, body, itemCount }) => {
  const headingId = `${sanitiseForDom(title)}-heading-${itemCount}`;
  const bodyId = `${sanitiseForDom(title)}-body-${itemCount}`;

  return (
    <div className="card">
      <div className="card-header" id={headingId}>
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-testid="accordion-item-button"
            data-toggle="collapse"
            data-target={`#${bodyId}`}
            aria-expanded="true"
            aria-controls={bodyId}
          >
            {title}
          </button>
        </h2>
      </div>

      <div
        id={bodyId}
        className="collapse"
        aria-labelledby={headingId}
        data-testid="accordion-item-body"
        data-parent={`#${groupName}`}
      >
        <div className="card-body">{body}</div>
      </div>
    </div>
  );
};
