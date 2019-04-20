import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMsg = () => {
  return (
    <Alert variant="danger" className="fade-in-animation">
      Weight and height feilds can't be blank or 0.
    </Alert>
  );
};

export default ErrorMsg;
