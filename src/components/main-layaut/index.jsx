import React from "react";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

const MainLayaut = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayaut;
