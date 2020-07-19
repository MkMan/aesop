import React from "react";

export type AccordionGroupName = { groupName: string };

export type AccordionChild = {
  title: string;
  body: React.ReactNode;
  itemCount: number; // needs to be unique to ensure items with the same name work independently
};
