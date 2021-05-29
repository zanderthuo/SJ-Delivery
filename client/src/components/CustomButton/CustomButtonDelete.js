import React from 'react';
import styled from 'styled-components';

const CustomButtonDelete = (props) => {
  const Button = styled.button`
    position: relative;
    width: 131px;
    height: 45px;
    left: 350px;
    top: -5px;
    background: #fff;
    color: #FF3D60;
    border: 1px solid #FF3D60;
    border-radius: 4px;
    &:hover {
      background-color: #FF3D60;
      color: #fff;
    }
  `
  return (
    <Button onClick={props.handleClick}>{props.label}</Button>
  )
}

export default CustomButtonDelete
