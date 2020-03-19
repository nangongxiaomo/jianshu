import React, { Component } from "react";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import { Container, Left, Right } from "./style";
import Label from "../../components/Labels/Labels";

class Home extends Component {
  componentDidMount() {
    this.props.getLabelList();
  }

  render() {
    const { labelsList } = this.props;
    const list = labelsList.toJS();
    return (
      <Container>
        <Left>
          <img
            className="banner"
            width="625"
            height="270"
            src={list.banner}
            alt="banner"
          />
          <Label labelsList={list.label} />
        </Left>
        <Right></Right>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  labelsList: state.getIn(["homeReducer", "labelsList"])
});
const mapDispatchToProps = dispatch => {
  return {
    getLabelList(list) {
      dispatch(actionCreators.getLabelList(list));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
