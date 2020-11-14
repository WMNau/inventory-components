import styled from "styled-components";

export const CloseButton = styled.button`
  float: right;
  border: #fff;
  background-color: red;
  color: #fff;
  font-weight: 700;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.95);
  cursor: pointer;

  &:hover {
    border: #fff;
    background-color: #fff;
    color: red;
  }
`;

export const SaveButton = styled.button`
  border: #00ab66;
  background-color: #00ab66;
  color: #fff;
  font-weight: 700;
  width: 55px;
  height: 20px;
  border-radius: 7px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.95);
  cursor: pointer;

  &:hover {
    border: #fff;
    background-color: #fff;
    color: #00ab66;
  }
`;
