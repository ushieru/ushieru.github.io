import React from "react";

import Navbar from "./Navbar";

const SimpleLayout = ({ children }) => (
  <div className="w-full h-full flex flex-col items-center justify-center text-gray-100">
    <Navbar />
    {children}
  </div>
);

export default SimpleLayout;
