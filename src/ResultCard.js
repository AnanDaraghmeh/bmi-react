import React from "react";
import { Card, Button } from "react-bootstrap";

import { bmiDetails } from "./data";

class ResultCard extends React.Component {
  state = {
    result: "",
    desc: "",
    color: "",
    icon: ""
  };

  componentDidMount = () => {
    const { bmi } = this.props;
    this.updateResult(bmi);
  };

  componentDidUpdate = prevProps => {
    const { bmi } = this.props;
    if (bmi !== prevProps.bmi) {
      this.updateResult(bmi);
    }
  };

  updateResult = bmi => {
    if (bmi >= 18.5 && bmi <= 25) {
      this.setState({
        result: bmiDetails.normal.result,
        desc: bmiDetails.normal.desc,
        color: bmiDetails.normal.color,
        icon: bmiDetails.normal.icon
      });
    } else if (bmi < 18.5) {
      this.setState({
        result: bmiDetails.underweight.result,
        desc: bmiDetails.underweight.desc,
        color: bmiDetails.underweight.color,
        icon: bmiDetails.underweight.icon
      });
    } else if (bmi > 25 && bmi < 30) {
      this.setState({
        result: bmiDetails.overweight.result,
        desc: bmiDetails.overweight.desc,
        color: bmiDetails.overweight.color,
        icon: bmiDetails.overweight.icon
      });
    } else if (bmi > 30) {
      this.setState({
        result: bmiDetails.obese.result,
        desc: bmiDetails.obese.desc,
        color: bmiDetails.obese.color,
        icon: bmiDetails.obese.icon
      });
    }
  };

  render() {
    const { bmi } = this.props;
    const { result, desc, color, icon } = this.state;
    return (
      <Card bg={color} className="fade-in-animation text-white">
        <Card.Header className="display-4 text-monospace font-weight-bold">
          {bmi}
          <i className={`fas ${icon} ml-3`} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{result}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button
            href="https://en.wikipedia.org/wiki/Body_mass_index"
            target="_blank"
            variant="outline-secondary"
          >
            More Info
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ResultCard;
