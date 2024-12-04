import React from "react";
import Form from "../components/form";

const Register = () => {
  return (
    <div>
      <Form route="/api/v1/register/" method="register" />
    </div>
  );
};

export default Register;
