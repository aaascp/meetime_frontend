import React from "react";
import { connect } from "react-redux";

import CarsList from "./CarsList";
// import SplitPane from "./SplitPane";
import CarsForm from "./forms/CarsForm";

import * as actions from "../actions";

class Cars extends React.Component {
  state = { selectedCar: null };

  componentDidMount() {
    this.props.fetchCarsList();
  }

  handleSubmitForm = () => {
    if (this.state.selectedCar) {
      this.props.updateCar(this.props.carsForm.values);
      this.setState({ selectedCar: null });
    } else {
      this.props.addCar(this.props.carsForm.values);
    }
  };

  handleCarClick = async car => {
    const selectedCar = await actions.fetchCar(car);
    this.setState({ selectedCar });
  };

  handleCarDeleteClick = car => {
    this.props.deleteCar(car);
  };

  handleClearClick = () => {
    this.setState({ selectedCar: null });
  };

  render() {
    console.log("Andre ", this.props.users);
    return (
      <div className="container split-pane">
        <div className="split-pane__left">
          <CarsList
            handleCarClick={this.handleCarClick}
            handleCarDeleteClick={this.handleCarDeleteClick}
            cars={this.props.cars}
          />
        </div>
        <div className="split-pane__right">
          <CarsForm
            usersList={this.props.users}
            handleSubmitForm={this.handleSubmitForm}
            selectedCar={this.state.selectedCar}
            handleClearClick={this.handleClearClick}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    cars: state.cars,
    carsForm: state.form.carsForm
  };
}

export default connect(mapStateToProps, actions)(Cars);
