import React from "react";

const ContentFooter = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex">
      <div className="flex-1 rounded-lg mb-4 mr-8">{children}</div>
      <div className="w-80"></div>
    </div>
  ); // can be post's comments, relative links or ads...
};

export default ContentFooter;
