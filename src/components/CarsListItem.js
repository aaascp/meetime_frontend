import React from "react";

class CarsListItem extends React.Component {
  onItemClick = event => {
    const item = event.target.dataset.id;
    this.props.itemClickHandler(item);
  };

  render() {
    return (
      <li
        className="cars-list__item"
        onClick={this.onItemClick}
        data-id={this.props.item}
      >
        {this.props.item}
      </li>
    );
  }
}

export default CarsListItem;
