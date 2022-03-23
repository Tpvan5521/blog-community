import React from "react";

const Paragraph = ({ content, customClassName }: { content: string; customClassName?: string }) => {
  return <p className={`text-white ${customClassName}`}>{content}</p>;
};

export default Paragraph;
