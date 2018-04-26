import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import * as actions from "../actions";

class Header extends React.Component {
  state = { token: undefined };

  componentDidMount() {
    this.getUsersList = debounce(this.getUsersList, 1500);
  }

  getUsersList = token => {
    this.props.fetchUsersList(token);
  };

  onTokenChange = event => {
    const token = event.target.value;
    this.getUsersList(token);
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="form__input">
            <input
              type="text"
              placeholder="Token do pipedrive"
              className="form__input-value form__input-value--header"
              onChange={this.onTokenChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Header);
