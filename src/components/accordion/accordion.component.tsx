import React from "react";
import { camelToKebab } from "../../utils/string.utils";
import { AccordionChild, AccordionGroupName } from "./accordion.types";

export const Accordion: React.FunctionComponent<
  AccordionGroupName & {
    children: AccordionChild[];
  }
> = ({ children, groupName }) => {
  const kebabGroupName = camelToKebab(groupName);

  return (
    <div className="accordion" id={kebabGroupName}>
      {children.map((item, index) => (
        <AccordionItem
          key={`accordion-item=${index}`}
          groupName={kebabGroupName}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  );
};

const AccordionItem: React.FunctionComponent<
  AccordionChild & AccordionGroupName
> = ({ groupName, title, body }) => {
  const headingId = `${camelToKebab(title)}-heading`;
  const bodyId = `${camelToKebab(title)}-body`;

  return (
    <div className="card">
      <div className="card-header" id={headingId}>
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
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
        data-parent={`#${groupName}`}
      >
        <div className="card-body">{body}</div>
      </div>
    </div>
  );
};
