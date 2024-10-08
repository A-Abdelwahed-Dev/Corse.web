import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="Wrapper">
      <Header />
      <div className="mail">
        {" "}
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default Root;
