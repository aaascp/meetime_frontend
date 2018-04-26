import React from "react";

class CarsListItem extends React.Component {
  onItemClick = event => {
    event.preventDefault();
    const itemId = event.target.dataset.id;
    this.props.itemClickHandler(itemId);
  };

  onItemDeleteClick = event => {
    event.stopPropagation();
    const itemId = event.target.dataset.id;
    this.props.itemClickDeleteHandler(itemId);
  };

  render() {
    return (
      <li
        className="cars-list__item"
        onClick={this.onItemClick}
        data-id={this.props.item.id}
      >
        {this.props.item.model}
        <button
          className="button button--inline"
          data-id={this.props.item.id}
          onClick={this.onItemDeleteClick}
        >
          X
        </button>
      </li>
    );
  }
}

export default CarsListItem;
