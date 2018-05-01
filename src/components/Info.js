import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { actions } from "../actions";

class Info extends React.Component {
  state = { showMessage: false };

  componentDidUpdate = prevProps => {
    const INFO_TIMEOUT = 3000;
    if (
      prevProps.apiError === this.props.apiError &&
      prevProps.apiSuccess === this.props.apiSuccess
    ) {
      return;
    }

    if (this.props.apiError || this.props.apiSuccess) {
      this.setState({ showMessage: true });
      setTimeout(() => {
        this.props.clearApiInfo();
        this.setState({ showMessage: false });
      }, INFO_TIMEOUT);
    }
  };

  getInfoStyle = () => {
    if (this.props.apiError) {
      return "info--error";
    } else if (this.props.apiSuccess) {
      return "info--success";
    }
    return "";
  };

  getMessage = () => {
    if (this.props.apiError) {
      return "Ocorreu algum erro.";
    } else if (this.props.apiSuccess) {
      return "Operação realizada com sucesso!";
    }
  };

  render = () =>
    this.state.showMessage && (
      <div className={`info ${this.getInfoStyle()}`}>{this.getMessage()}</div>
    );
}

const mapStateToProps = state => {
  return {
    apiError: state.apiInfos.error,
    apiSuccess: state.apiInfos.success
  };
};

export default connect(mapStateToProps, actions)(Info);
