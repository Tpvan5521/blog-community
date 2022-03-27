import React from "react";

const List = ({ children }: { children: JSX.Element }) => {
  return <ul className="mb-4">{children}</ul>;
};

export default List;
