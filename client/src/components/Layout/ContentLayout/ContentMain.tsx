import React from "react";

const ContentMain = ({ children, customClassName }: { children: JSX.Element; customClassName?: string }) => {
  return <div className={`flex-1 my-4 px-4 ${customClassName}`}>{children}</div>;
};

export default ContentMain;
