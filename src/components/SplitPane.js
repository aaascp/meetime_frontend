import React from "react";

class SplitPane extends React.Component {
  render() {
    const [leftChild, rightChild] = React.Children.toArray(this.props.children);
    return (
      <div className="split-pane">
        <div className="split-pane__left">{leftChild}</div>
        <div className="split-pane__right">{rightChild}</div>
      </div>
    );
  }
}

export default SplitPane;
