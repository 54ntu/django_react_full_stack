import React from "react";
import Form from "../components/form";

const Login = () => {
  return (
    <div>
      <Form route="/api/v1/token/" method="login" />
    </div>
  );
};

export default Login;
