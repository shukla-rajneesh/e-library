import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="relative bg-cyan-600">{children}</div>
    </>
  );
};

export default AuthLayout;
