import React from "react";
import DashPage from "../../components/Layout/DashPage";

const Dashboard = () => {
  return (
    <DashPage>
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
        <h1 className="text-4xl font-bold text-blue-500">
          Welcome to Dashboard
        </h1>
      </div>
    </DashPage>
  );
};

export default Dashboard;
