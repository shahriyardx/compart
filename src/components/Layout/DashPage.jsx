import React, { useState } from "react";
import DashHeader from "../Header/DashHeader";
import Sidebar from "../Sidebar/Sidebar";

const DashPage = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-dash">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="max-h-screen overflow-y-auto">
        <DashHeader open={open} setOpen={setOpen} />
        <div className="container mx-auto px-4">{children}</div>
      </div>
    </div>
  );
};

export default DashPage;
