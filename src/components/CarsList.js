import React from "react";
import CarsListItem from "./CarsListItem";

class CarsList extends React.Component {
  onItemClick = item => {
    this.props.handleCarClick(item);
  };

  itemClickDeleteHandler = item => {
    this.props.handleCarDeleteClick(item);
  };

  render() {
    return (
      <div className="cars-list">
        {this.props.cars.map(car => (
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

export default CarsList;
