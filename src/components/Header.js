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
