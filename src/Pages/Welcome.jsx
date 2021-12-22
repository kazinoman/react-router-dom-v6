import React from "react";
import { Outlet, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome page !</h1>
      <Link to="/welcome/hi">Welcome</Link>
      <Link to="/welcome/noman">Name</Link>
      <Outlet />
    </div>
  );
};

export default Welcome;
