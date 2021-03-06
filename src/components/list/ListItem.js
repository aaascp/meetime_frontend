import React from "react";

class ListItem extends React.Component {
  onItemClick = event => {
    const id = event.currentTarget.dataset.id;
    const index = event.currentTarget.dataset.index;
    this.props.itemClickHandler({ id, index });
  };

  onDeleteClick = event => {
    event.stopPropagation();
    const id = event.target.dataset.id;
    const index = event.target.dataset.index;
    const name = event.target.dataset.name;
    this.props.deleteClickHandler({ id, index, name });
  };

  render() {
    return (
      <li
        className="list__item"
        onClick={this.onItemClick}
        data-id={this.props.item.id}
        data-index={this.props.index}
      >
        {this.props.index + 1}.
        <div className="list__item-content">{this.props.item.model}</div>
        <button
          className="button button--inline"
          data-id={this.props.item.id}
          data-index={this.props.index}
          data-name={this.props.name}
          onClick={this.onDeleteClick}
        >
          X
        </button>
      </li>
    );
  }
}

export default ListItem;
