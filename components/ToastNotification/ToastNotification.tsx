import React from "react";
import classNames from "classnames/bind";
import * as Toast from "@radix-ui/react-toast";

import styles from "./ToastNotification.module.css";

const c = classNames.bind(styles);

export type ToastNotificationProp = Pick<
  Toast.ToastProps,
  "open" | "onOpenChange" | "duration"
> & {
  trigger: React.ReactElement;
  title: string;
  description: string;
  action?: React.ReactElement;
  altText: string;
};

export function ToastNotification({
  open,
  onOpenChange,
  duration,
  trigger,
  title,
  description,
  action,
  altText,
}: ToastNotificationProp) {
  return (
    <Toast.Provider>
      {trigger}
      <Toast.Root open={open} onOpenChange={onOpenChange} duration={duration}>
        <Toast.Title>{title}</Toast.Title>

        <Toast.Description> {description} </Toast.Description>
        <Toast.Action altText={altText}>{action}</Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={c("ToastViewport")} />
    </Toast.Provider>
  );
}
