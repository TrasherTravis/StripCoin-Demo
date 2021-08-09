import React from 'react';
import styled from 'styled-components';

export const List: React.FC<any> = styled.ul`
  display: block;
  list-style-type: square;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 40px;
`;

export const Row: React.FC<any> = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
`;

export const Wallet: React.FC<any> = styled.h3`
  font-size: 1.6em;
  padding-left: 2em;
  color: white;
  text-shadow: 0 0 0.1em #ffb600;
`;

export const WalletDisconnect: React.FC<any> = styled.a`
  color:#7900bf;
  cursor:pointer;
`;

export const Link: React.FC<any> = styled.a`
  color: #ffb600;
  white-space: nowrap;

  &:hover {
    color: white;
    text-shadow: 0 0 0.2em #c77d14;
    text-shadow: 0 0 0.4em #ffb600;
  }
`;

export const Text: React.FC<any> = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

