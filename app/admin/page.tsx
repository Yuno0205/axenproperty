"use client";

import React from "react";
import { Admin, Login } from "react-bricks";

const AdminLoginPage: React.FC = () => {
  return (
    <Admin isLogin>
      <Login />
    </Admin>
  );
};

export default AdminLoginPage;
