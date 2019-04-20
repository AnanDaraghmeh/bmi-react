import React from "react";
import { Form, Button, InputGroup, Container } from "react-bootstrap";

import ResultCard from "./ResultCard";
import ErrorMsg from "./ErrorMsg";

class Main extends React.Component {
  state = {
    weight: "",
    height: "",
    bmi: "",
    displayResult: false,
    displayError: false
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  calculateBmi = () => {
    const { weight, height } = this.state;
    const bmi = parseFloat(weight / (height * 2)).toFixed(2);
    this.setState({ bmi: bmi });
    if (weight > 0 && height > 0) {
      this.setState({ displayResult: true, displayError: false });
    } else {
      this.setState({ displayError: true, displayResult: false });
    }
  };

  handleReset = () => {
    this.setState({
      weight: "",
      height: "",
      bmi: "",
      displayResult: false,
      displayError: false
    });
  };

  render() {
    const { weight, height, bmi, displayResult, displayError } = this.state;
    return (
      <Container>
        <Form>
          <Form.Group className="mb-2">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Enter your weight:</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                name="weight"
                min="0"
                value={weight}
                onChange={this.handleInputChange}
              />
              <InputGroup.Append>
                <InputGroup.Text>kg</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Enter your height:</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                name="height"
                min="0"
                value={height}
                onChange={this.handleInputChange}
              />
              <InputGroup.Append>
                <InputGroup.Text>meters</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>

          <Button
            onClick={this.calculateBmi}
            variant="outline-primary"
            className="mr-1"
          >
            Calculate
          </Button>
          <Button onClick={this.handleReset} variant="outline-danger">
            Reset
          </Button>
        </Form>
        <div className="mt-3">
          {displayResult && <ResultCard bmi={bmi} />}
          {displayError && <ErrorMsg />}
        </div>
      </Container>
    );
  }
}

export default Main;
