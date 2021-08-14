import React from 'react';
import styled from 'styled-components';

export const Container: React.FC<any> = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  color: #bbbaba;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Close: React.FC<any> = styled.a`
  color: black;
  float: right;
`;

export const PopupCont: React.FC<{isMobile?: boolean}> = styled.div`
  z-index: 3;
  width: ${({isMobile})=> isMobile ? '95%' : '36em;'};
  margin-right: auto;
  margin-left: auto;
  font-size: ${({isMobile})=> isMobile ? '0.6em' : '1.2em'};
  padding: 0;
`;

export const InnerBlock: React.FC<any> = styled.div`
  background: rgba(0, 0, 0, 0.95);
  border: 8px #ffb600 solid;
  border-top: 0;
  box-shadow: 0 0 2em #7900bf;
  padding: 0;
  margin: 2em auto 0 auto;
`;

export const Header: React.FC<any> = styled.div`
  background: #ffb600;
  color: #7900bf;
  padding: 0.3em 1em 0.1em 1em;
  margin: 0;
  font-family: 'STRIP';
  text-shadow: 2px 2px 0 black
`;

export const Strong: React.FC<any> = styled.strong`
  font-weight: normal;
  color: #fff6e2;
  text-shadow: 0 0 0.2em #ffb600;
  white-space: nowrap;
`;

export const Image: React.FC<{isMobile: boolean, src: string}> = styled.img`
  width: ${({isMobile})=> isMobile ? '64px' : '128px'};
  height: ${({isMobile})=> isMobile ? '64px' : '128px'};
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 0;
`;

export const TransactionHASH: React.FC<{ isMobile: boolean; href: string}> = styled.a`
  font-size: ${({isMobile})=> isMobile ? '0.7em' : '0.8em'};
  color: #ffb600;
  white-space: nowrap;
  
  &:hover {
    color: white;
    text-shadow: 0 0 0.2em #c77d14;
    text-shadow: 0 0 0.4em #ffb600;
  }
`;

export const Text: React.FC<any> = styled.h3`
  background: #ffb600;
  color: #7900bf;
  padding: 0.3em 1em 0.1em 1em;
  margin: 0px;
  font-family: 'STRIP';
  text-shadow: 2px 2px 0 black;
`;

export const Content: React.FC<any> = styled.div`
  padding: 0.2em 1em 1em 1em;
`;