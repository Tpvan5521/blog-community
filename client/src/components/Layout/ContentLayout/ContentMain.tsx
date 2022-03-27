import React from "react";

const ContentMain = ({ children }: { children: JSX.Element }) => {
  return <div className="flex-1 my-4 px-4">{children}</div>;
};

export default ContentMain;
