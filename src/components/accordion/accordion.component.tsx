import React from "react";

interface AccordionProps {
  children: any[];
  groupName: string;
}

interface AccordionItemProps {
  groupName: string;
  index: number;
}

const AccordionItem: React.FunctionComponent<AccordionItemProps> = ({
  groupName,
  index,
}) => {
  const headingId = `${groupName}-heading-${index}`;
  const bodyId = `${groupName}-body-${index}`;

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
            Collapsible Group Item #1
          </button>
        </h2>
      </div>

      <div
        id={bodyId}
        className="collapse"
        aria-labelledby={headingId}
        data-parent={`#${groupName}`}
      >
        <div className="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FunctionComponent<AccordionProps> = ({
  children,
  groupName,
}) => {
  return (
    <div className="accordion" id={groupName}>
      {children.map((_item, index) => (
        <AccordionItem
          key={`accordion-item=${index}`}
          groupName={groupName}
          index={index}
        />
      ))}
    </div>
  );
};
