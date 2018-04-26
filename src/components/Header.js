import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import * as actions from "../actions";

const TOKEN_COOKIE = "TOKEN_COOKIE";

class Header extends React.Component {
  state = { token: localStorage.getItem(TOKEN_COOKIE) || null };

  componentDidMount() {
    const DEBOUNCE_TIME = 1500;
    this.getUsersList = debounce(this.getUsersList, DEBOUNCE_TIME);

    if (this.state.token) this.getUsersList(this.state.token);
  }

  getUsersList = token => {
    this.props.fetchUsersList(token);
    localStorage.setItem(TOKEN_COOKIE, token);
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
              value={this.state.token}
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
