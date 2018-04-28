import React from "react";
import { connect } from "react-redux";
import { actions } from "../actions";
import CarsListItem from "./CarsListItem";

class CarsList extends React.Component {
  componentDidMount() {
    this.props.fetchCarsList();
  }

  onItemClick = item => {
    this.props.fetchCar(item);
  };

  itemClickDeleteHandler = item => {
    this.props.deleteCar(item);
  };

  render() {
    return (
      <div className="cars-list">
        {this.props.carsList.map(car => (
          <CarsListItem
            itemClickHandler={this.onItemClick}
            itemClickDeleteHandler={this.itemClickDeleteHandler}
            item={car}
            key={car.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    carsList: state.carsList
  };
};

export default connect(mapStateToProps, actions)(CarsList);
