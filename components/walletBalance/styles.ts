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

export const TextPrimary: React.FC<any> = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export const Secondary: React.FC<any> = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export const Balance: React.FC<any> = styled.h3`
  font-size: 2.4em;
  padding-left: 1em;
  color: lime;
  text-shadow: 0 0 0.2em green;
  font-family: 'STRIP';
`;

export const Image: React.FC<any> = styled.img`
   height: 130px;
`;

export const BlockedContent: React.FC<any> = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
