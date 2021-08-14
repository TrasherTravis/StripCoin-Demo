import React from "react";
import styled from "styled-components";

export const ButtonStyled: React.FC<{onClick: () => void; isInactive: boolean; font: string}> = styled.a`
  font-size: ${({font})=> font ? font : '1.6em'};
  clear: both;
  padding:  0.3em 1em 0.1em 1em;
  background: ${({isInactive})=> isInactive ? '#97979a' : '#ffb600'};
  border: 4px solid #7900bf;
  border-radius: 1em;
  box-shadow: 0 0 0.8em #c77d14;
  font-family: 'STRIP';
  color: #000;
  cursor: ${({isInactive})=> isInactive ? 'not-allowed' : 'pointer'};

  &:hover {
    background: #fff6e2;
    box-shadow: 0 0 1em #ffb600;
    border-color: #ffb600;
  }
`;