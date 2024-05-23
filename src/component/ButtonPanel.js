import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="cos" clickHandler={this.handleClick} color="red" />
          <Button name="sin" clickHandler={this.handleClick} color="red" />
          <Button name="tan" clickHandler={this.handleClick} color="red" />
        </div>
        <div>
          <Button name="arccos" clickHandler={this.handleClick} color="red" />
          <Button name="arcsin" clickHandler={this.handleClick} color="red" />
          <Button name="arctan" clickHandler={this.handleClick} color="red" />
        </div>
        <div>
          <Button name="AC" clickHandler={this.handleClick} color="blue" />
          <Button name="+/-" clickHandler={this.handleClick} color="orange" />
          <Button name="mod" clickHandler={this.handleClick} color="blue" />
          <Button name="÷" clickHandler={this.handleClick} color="orange" />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} color="blue" />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} color="orange" />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} color="blue" />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} color="orange" />
        </div>
      </div>
    );
  }
}
