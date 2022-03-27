import React from "react";

const ContentLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      {/* ContentHeader? */}
      <div className="flex my-4">
        {children}
        {/* ContentLeft */}
        {/* ContentMain */}
        {/* ContentRight */}
      </div>
      {/* ContentFooter? */}
    </>
  );
};

export default ContentLayout;
