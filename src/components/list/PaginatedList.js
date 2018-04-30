import React from "react";
import ListItem from "./ListItem";

class PaginatedList extends React.Component {
  onItemClick = ({ id, index }) => {
    this.props.itemClickHandler({ id, index });
  };

  onDeleteClick = ({ id, index }) => {
    this.props.deleteClickHandler({ id, index });
  };

  onNextPageClick = () => {
    this.props.nextPageHandler();
  };

  render() {
    return (
      <div className="list">
        {this.props.items.map((item, index) => (
          <ListItem
            itemClickHandler={this.onItemClick}
            deleteClickHandler={this.onDeleteClick}
            item={item}
            index={index}
            key={item.id}
          />
        ))}
        {this.props.totalCount - this.props.items.length > 0 && (
          <li
            className="list__item list__item--action"
            onClick={this.onNextPageClick}
          >
            <span>Carregar mais...</span>
          </li>
        )}
      </div>
    );
  }
}

export default PaginatedList;
