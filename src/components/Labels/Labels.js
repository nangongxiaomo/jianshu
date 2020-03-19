import React, { Component } from "react";
import { LabelContainer, LabelItem } from "./style";
import { connect } from "react-redux";

class Labels extends Component {
  render() {
    const jsLabel = this.props.labels.toJS();
    return (
      <LabelContainer>
        {jsLabel.label &&
          jsLabel.label.map((item, index) => {
            return (
              <LabelItem key={index}>
                <img className="label-pic" src={item.image} alt="" />
                <span className="text">{item.name}</span>
              </LabelItem>
            );
          })}
      </LabelContainer>
    );
  }
}

const mapStateToProps = state => ({
  labels: state.getIn(["homeReducer", "labelsList"])
});

export default connect(mapStateToProps, null)(Labels);
