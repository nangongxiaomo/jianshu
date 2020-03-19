import styled from "styled-components";

export const LabelContainer = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
`;

export const LabelItem = styled.div`
  cursor: pointer;
  float: left;
  border: 1px solid #dcdcdc;
  background-color: #f7f7f7;
  border-radius: 4px;
  height: 34px;
  line-height: 32px;
  margin-right: 15px;
  margin-bottom: 15px;

  .label-pic {
    width: 32px;
    height: 32px;
    border-radius: 4px;
  }
  .text {
    display: block;
    float: right;
    padding: 0 10px;
    font-size: 14px;
    color: #333;
  }
`;
