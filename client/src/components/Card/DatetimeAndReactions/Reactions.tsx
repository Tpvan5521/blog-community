import React from "react";
import styled from "styled-components";

const StyledReaction = styled.div`
  margin-right: 1rem;
  display: flex;
  aline-items: center;
`;

const Reactions = ({ icon, value }: { icon: JSX.Element; value: number | string }) => {
  return (
    <StyledReaction>
      <div className="flex items-center mr-2">{icon}</div>
      <div>{value.toString()}</div>
    </StyledReaction>
  );
};

export default Reactions;
