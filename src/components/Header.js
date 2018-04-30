import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { actions } from "../actions";

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
    this.setState({ token });
    this.getUsersList(token);
  };

  getInfoStyle = () => {
    if (this.props.usersListSize) {
      return " form__info--success";
    } else if (this.props.tokenUnauthorized) {
      return " form__info--error";
    }
    return "";
  };

  getInfoContent = () => {
    if (this.props.usersListSize > 0) {
      return "Token Válido";
    } else if (this.props.tokenUnauthorized) {
      return "Token Inválido";
    }
    return "";
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="form__field">
            <div className="form__input">
              <input
                value={this.state.token}
                type="text"
                placeholder="Token do pipedrive"
                className="form__input-value form__input-value--header"
                onChange={this.onTokenChange}
              />
              <div
                className={
                  "form__info form__info--header" + this.getInfoStyle()
                }
              >
                {this.getInfoContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tokenUnauthorized: state.usersList.unauthorized,
    usersListSize: state.usersList.value.length
  };
};

export default connect(mapStateToProps, actions)(Header);
