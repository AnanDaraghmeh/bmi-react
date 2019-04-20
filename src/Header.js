import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Jumbotron fluid className="py-4 bg-primary text-white">
        <Container>
          <h1>BMI Calculator</h1>
          <p>
            This is a simple BMI Calculator. Enter your weight in kilograms and
            height in meters below to calculate yor BMI.
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Header;
