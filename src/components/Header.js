import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Header extends React.Component {
  state = { token: undefined };

  onTokenChange = event => {
    const token = event.target.value;
    this.props.setToken(token);
  };

  render() {
    return (
      <div className="header">
        <input
          type="text"
          placeholder="Token do pipedrive"
          className="header__input"
          onChange={this.onTokenChange}
        />
      </div>
    );
  }
}

export default connect(null, actions)(Header);
