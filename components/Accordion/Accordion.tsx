import React, { ReactElement } from "react";
import { CaretDown } from "phosphor-react";
import classNames from "classnames/bind";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import styles from "./Accordion.module.css";

const c = classNames.bind(styles);

export type AccordionProp = {
  tasks: [];
};

export type AccordionItemProps = {
  id?: number;
  summary: string;
  body: string;
};

export default function Accordion({ tasks }: AccordionProp) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={c("AccordionRoot")}
    >
      {tasks?.map((task: AccordionItemProps) => (
        <AccordionPrimitive.Item
          value={`item ${task.id}`}
          key={`item ${task.id}`}
          className={c("AccordionItem")}
        >
          <AccordionTrigger>{task.summary}</AccordionTrigger>
          <AccordionContent>{task.body}</AccordionContent>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className={c("AccordionHeader")}>
    <AccordionPrimitive.Trigger
      className={c("AccordionTrigger", className)}
      {...props}
      ref={forwardedRef}
    >
      <CaretDown weight="fill" className={c("AccordionCaret")} aria-hidden />

      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

const AccordionContent = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={c("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={c("AccordionContentText")}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
