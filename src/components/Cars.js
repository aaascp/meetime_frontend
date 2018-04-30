// import SplitPane from "./SplitPane";
import React from "react";
import CarsList from "./CarsList";
import CarsForm from "./forms/cars/CarsForm";

const LEFT = "left";
const RIGHT = "right";

class Cars extends React.Component {
  state = { showLeft: true, showRight: false };

  showRight = () => {
    this.setState({ showLeft: false, showRight: true });
  };
  showLeft = () => this.setState({ showLeft: true, showRight: false });

  showLeftStyle = () => {
    if (this.state.showLeft) {
      return "split-pane__show";
    }
    return "";
  };

  showRightStyle = () => {
    if (this.state.showRight) {
      return "split-pane__show";
    }
    return "";
  };

  getNavStyle = side => {
    if (this.state.showLeft && side === LEFT) {
      return "split-pane__nav-item--selected";
    } else if (this.state.showRight && side === RIGHT) {
      return "split-pane__nav-item--selected";
    }
    return "";
  };

  render() {
    return (
      <div className="container">
        <div className="split-pane__nav">
          <div
            className={`split-pane__nav-item ${this.getNavStyle(LEFT)}`}
            onClick={this.showLeft}
          >
            Lista
          </div>
          <div
            className={`split-pane__nav-item ${this.getNavStyle(RIGHT)}`}
            onClick={this.showRight}
          >
            Formulário
          </div>
        </div>
        <div className="split-pane">
          <div className={`split-pane__item ${this.showLeftStyle()}`}>
            <CarsList onClick={this.showRight} />
          </div>

          <div className={`split-pane__item ${this.showRightStyle()}`}>
            <CarsForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Cars;
