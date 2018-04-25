import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import CarsListItem from "./CarsListItem";

class CarsList extends React.Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  onItemClick = item => {
    console.log("Clicou no item", item);
  };

  onActionClik = () => {
    console.log("Clicou em Novo");
  };

  render() {
    return (
      <div className="cars-list">
        <div className="cars-list__action">
          <button className="button" onClick={this.onActionClik}>
            Novo
          </button>
        </div>
        {this.props.cars.map(car => (
          <CarsListItem
            itemClickHandler={this.onItemClick}
            item={car}
            key={car}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default connect(mapStateToProps, actions)(CarsList);
