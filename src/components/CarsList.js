import React from "react";
import { connect } from "react-redux";
import { actions } from "../actions";
import PaginatedList from "./list/PaginatedList";

class CarsList extends React.Component {
  componentDidMount() {
    this.props.fetchCarsList();
  }

  itemClickHandler = ({ id, index }) => {
    this.props.fetchCar({ id, index });
    this.props.onClick();
  };

  deleteClickHandler = ({ id, index }) => {
    this.props.deleteCar({ id, index });
  };

  nextPageHandler = item => {
    this.props.fetchCarsList(this.props.nextUrl);
  };

  populateList = () => {
    this.props.populateList();
  };

  render() {
    return (
      <PaginatedList
        emptyClickHandler={this.populateList}
        itemClickHandler={this.itemClickHandler}
        deleteClickHandler={this.deleteClickHandler}
        nextPageHandler={this.nextPageHandler}
        items={this.props.carsList}
        links={this.props.links}
        limit={this.props.limit}
        itemName={"model"}
        onClick={this.props.onClick}
        totalCount={this.props.totalCount}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    carsList: state.carsList.value,
    nextUrl: state.carsList.links ? state.carsList.links.next : null,
    totalCount: state.carsList.totalCount
  };
};

export default connect(mapStateToProps, actions)(CarsList);
