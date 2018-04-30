// import SplitPane from "./SplitPane";
import React from "react";
import CarsList from "./CarsList";
import CarsForm from "./forms/cars/CarsForm";

class Cars extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="split-pane">
          <div className="split-pane__item">
            <CarsList />
          </div>

          <div className="split-pane__item split-pane__item--right">
            <CarsForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Cars;
