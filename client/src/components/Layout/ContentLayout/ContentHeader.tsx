import React from "react";

const ContentHeader = ({ children }: { children: JSX.Element }) => {
  return <div className="w-full rounded-lg mt-4">{children}</div>; // can be post's title, banner or ads...
};

export default ContentHeader;
