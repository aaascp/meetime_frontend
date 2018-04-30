// import SplitPane from "./SplitPane";
import React from "react";
import CarsList from "./CarsList";
import CarsForm from "./forms/cars/CarsForm";

class Cars extends React.Component {
  render() {
    return (
      <div className="container split-pane">
        <div className="container split-pane__left">
          <CarsList />
        </div>

        <div className="container split-pane__right">
          <CarsForm />
        </div>
      </div>
    );
  }
}

export default Cars;
