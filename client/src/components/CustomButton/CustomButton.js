import React from 'react';
import styled from 'styled-components';

const CustomButton = (props) => {
  const Button = styled.button`
    position: absolute;
    width: 131px;
    height: 45px;
    left: 1085px;
    top: 170px;
    background: #5664D2;
    color: #fff;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #fff;
      color: black;
      border: 1px solid #5664D2;
    }
  `
  return (
    <Button onClick={props.handleClick}>{props.label}</Button>
  )
}

export default CustomButton
