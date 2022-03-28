import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ content, link }: { content: string[] | JSX.Element[]; link: string[] }) => {
  return (
    <div className="bg-transparent rounded-xl px-6 py-4">
      <div>
        {content.map((c, key: number) => {
          if (key === content.length - 1) {
            return (
              <Link to={link[key]} className="mr-2">
                {c}
              </Link>
            );
          }
          return (
            <>
              <Link to={link[key]} className="mr-2">
                {c}
              </Link>
              <span className="mr-2">&#8594;</span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
