import React from 'react';
import styled from "styled-components";

export const Background: React.FC<any> = styled.div`
  margin: 0em;
  padding: 0em;
  background: #000000 url("images/city.jpg") fixed;
  background-size: cover;
`;

export const Content: React.FC<{ isMobile?: boolean }> = styled.div`
  ${({isMobile}) => isMobile ? 'width: auto; margin: 0; padding:0;' : 'display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60em;\n  color: #bbbaba;\n  font-size: 1.2em;\n  font-family: \'Source Sans Pro\';'}
`;

export const Image: React.FC<{ isMobile?: boolean, src?: string, alt?: string }> = styled.img`
  ${({isMobile}) => !isMobile ? 'padding: 1em' : 'width: 80%'};
  margin-right: auto;
  margin-left: auto;
`;

export default null;
