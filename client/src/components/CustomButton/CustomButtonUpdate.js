import React from 'react';
import styled from 'styled-components';

const CustomButtonUpdate = (props) => {
  const Button = styled.button`
    position: relative;
    width: 131px;
    height: 45px;
    left: 300px;
    top: -5px;
    background: #0D97E4;
    color: #fff;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #fff;
      color: #0D97E4;
      border: 1px solid #0D97E4;
    }
  `
  return (
    <Button onClick={props.handleClick}>{props.label}</Button>
  )
}

export default CustomButtonUpdate
