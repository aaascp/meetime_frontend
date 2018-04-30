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
  };

  deleteClickHandler = ({ id, index }) => {
    this.props.deleteCar({ id, index });
  };

  nextPageHandler = item => {
    console.log(this.props.nextUrl);
    this.props.fetchCarsList(this.props.nextUrl);
  };

  render() {
    return (
      <PaginatedList
        itemClickHandler={this.itemClickHandler}
        deleteClickHandler={this.deleteClickHandler}
        nextPageHandler={this.nextPageHandler}
        items={this.props.carsList}
        links={this.props.links}
        limit={this.props.limit}
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
