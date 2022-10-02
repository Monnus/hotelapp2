import React from "react";

export const Row = ({ children, className, ...restProps }) => {
  // "hello"
  return (
    <div className={`${className} common-row`} {...restProps}>
      {children}

    </div>
  );
};
