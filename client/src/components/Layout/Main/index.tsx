import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <div className="mb-auto">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
