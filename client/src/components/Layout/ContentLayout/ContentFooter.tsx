import React from "react";

const ContentFooter = ({ children }: { children: JSX.Element }) => {
  return <div className="bg-transparent w-full rounded-lg mb-4">{children}</div>; // can be post's comments, relative links or ads...
};

export default ContentFooter;
