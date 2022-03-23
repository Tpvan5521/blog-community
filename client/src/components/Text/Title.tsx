import React from "react";

const Title = ({ content, customClassName, icon }: { content: string; customClassName?: string; icon?: JSX.Element }) => {
  return (
    <h5 className={`text-white font-bold ${customClassName}`}>
      {icon} {content}
    </h5>
  );
};

export default Title;
