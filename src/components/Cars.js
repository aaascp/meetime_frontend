import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";

import CarsList from "./CarsList";
// import SplitPane from "./SplitPane";
import CarsForm from "./forms/CarsForm";

import { actions } from "../actions";

class Cars extends React.Component {
  componentDidMount() {
    const DEBOUNCE_TIME = 1500;
    const DEBOUNCE_OPTIONS = { leading: true, trailing: false };

    this.props.fetchCarsList();

    this.handleAddCar = debounce(
      this.handleAddCar,
      DEBOUNCE_TIME,
      DEBOUNCE_OPTIONS
    );

    this.handleUpdateCar = debounce(
      this.handleUpdateCar,
      DEBOUNCE_TIME,
      DEBOUNCE_OPTIONS
    );
  }

  handleAddCar = () => {
    this.props.addCar(this.props.carsForm.values);
  };

  handleUpdateCar = () => {
    this.props.updateCar(this.props.carsForm.values);
  };

  handleCarClick = car => {
    this.props.fetchCar(car);
  };

  handleCarDeleteClick = car => {
    this.props.deleteCar(car);
  };

  render() {
    return (
      <div className="container split-pane">
        <div className="split-pane__left">
          <CarsList
            handleCarClick={this.handleCarClick}
            handleCarDeleteClick={this.handleCarDeleteClick}
          />
        </div>
        <div className="split-pane__right">
          <CarsForm
            handleAddCar={this.handleAddCar}
            handleUpdateCar={this.handleUpdateCar}
            handleClearClick={this.handleClearClick}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    carsForm: state.form.carsForm
  };
}

export default connect(mapStateToProps, actions)(Cars);
