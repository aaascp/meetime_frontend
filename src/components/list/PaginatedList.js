import React from "react";
import ListItem from "./ListItem";
import LoadMoreItem from "./LoadMoreItem";

class PaginatedList extends React.Component {
  onItemClick = ({ id, index }) => {
    this.props.itemClickHandler({ id, index });
  };

  onDeleteClick = ({ id, index, name }) => {
    if (window.confirm(`Deseja excluir o item: ${name}`)) {
      this.props.deleteClickHandler({ id, index });
    }
  };

  onNextPageClick = () => {
    this.props.nextPageHandler();
  };

  renderList = () => {
    if (this.props.items.length === 0) {
      return this.renderEmptyList();
    } else {
      return this.renderListItems();
    }
  };

  renderEmptyList = () => {
    return <div className="list--empty">Lista vazia</div>;
  };

  renderListItems = () => {
    return this.props.items.map((item, index) => {
      return (
        <ListItem
          itemClickHandler={this.onItemClick}
          deleteClickHandler={this.onDeleteClick}
          item={item}
          name={item[this.props.itemName]}
          index={index}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <div className="list">
        {this.renderList()}
        <LoadMoreItem
          totalCount={this.props.totalCount}
          itemsSize={this.props.items.length}
          onClick={this.onNextPageClick}
        />
      </div>
    );
  }
}

// <div className="list">
//   this.props.items.map((item, index) => (
//   <ListItem
//     itemClickHandler={this.onItemClick}
//     deleteClickHandler={this.onDeleteClick}
//     item={item}
//     name={item[this.props.itemName]}
//     index={index}
//     key={item.id}
//   />
//   <LoadMoreItem
//   totalCount={this.props.totalCount}
//    itemsSize={this.props.items.length}
//     onCLick={this.onNextPageClick}/>
//   )
// </div>
// )

export default PaginatedList;
