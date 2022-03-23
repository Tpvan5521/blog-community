import React from "react";

const Title = ({ content, customClassName }: { content: string; customClassName?: string }) => {
  if (content !== "") {
    return <></>;
  }
  return <p className={`text-white ${customClassName}`}>{content}</p>;
};

export default Title;
