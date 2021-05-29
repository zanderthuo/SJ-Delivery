import React from 'react';
import styled from 'styled-components';

const CustomButtonSave = (props) => {
  const Button = styled.button`
    position: relative;
    width: 195px;
    height: 42px;
    left: 370px;
    top: 5px;
    background: #1CBB8C;
    color: #fff;
    border: none;
    border-radius: 4px;
    &:hover {
      background-color: #fff;
      color: #1CBB8C;
      border: 1px solid #1CBB8C;
    }
  `
  return (
    <Button onClick={props.handleClick}>{props.label}</Button>
  )
}

export default CustomButtonSave
