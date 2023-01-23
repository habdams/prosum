import React from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.css";

const c = classNames.bind(styles);

type ButtonProp = {
  children: React.ReactNode;
};

export const Button = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>(({ children, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={c("button", { secondary: props.className })}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
