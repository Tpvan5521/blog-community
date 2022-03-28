import React from "react";
import Reactions from "./Reactions";

import formatDate from "utils/convertDate.util";
import { AiOutlineEye, AiOutlineComment } from "react-icons/ai";
import { BiShare } from "react-icons/bi";

const reactionIcons: JSX.Element[] = [<AiOutlineEye key={0} />, <AiOutlineComment key={1} />, <BiShare key={2} />];

const DatetimeAndReactions = ({
  createdTime,
  reaction,
}: {
  createdTime: Date | string;
  reaction: { view: number | string; like: number | string; share: number | string };
}) => {
  return (
    <div className="flex">
      <div className="mr-4">{typeof createdTime === "string" ? createdTime : formatDate(createdTime)}</div>
      <ul className="flex items-center mb-4">
        {reactionIcons.map((icon: JSX.Element, key: number) => {
          const { view, like, share } = reaction;
          switch (key) {
            case 0:
              return <Reactions icon={icon} value={view} key={key} />;
            case 1:
              return <Reactions icon={icon} value={like} key={key} />;
            default:
              return <Reactions icon={icon} value={share} key={key} />;
          }
        })}
      </ul>
    </div>
  );
};

export default DatetimeAndReactions;
