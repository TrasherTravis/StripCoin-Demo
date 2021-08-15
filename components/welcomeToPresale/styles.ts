import React from 'react';
import styled from 'styled-components';

export const Container: React.FC<{ isMobile?: boolean }> = styled.div`
  ${({isMobile}) => isMobile ? 'width:inherit; margin: 0; padding-left: 1em; padding-right: 1em; border: 0px;' : null}
  ${({isMobile}) => isMobile ? 'width: inherit; margin: 0' : ' margin-left: auto;  margin-right: auto;'};
  padding: ${({isMobile}) => isMobile ? '0 1em 0 1em' : '0.5em 2em 0.5em 2em'};
  background: rgba(0, 0, 0, 0.95);
  color: white;
  border-left: ${({isMobile}) => isMobile ? null : '#ffb600 12px solid'};
  font-size: 1.4em;
  text-shadow: 0 0 0.1em #c77d14;
`;

export const Text: React.FC<any> = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

export const Secondary: React.FC<any> = styled.h3`
  display: block;
  font-size: 1.17em;
  color: #FFF;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-weight: bold;
`;

export const Strong: React.FC<any> = styled.strong`
  font-weight: normal;
  color: #fff6e2;
  text-shadow: 0 0 0.2em #ffb600;
  white-space: nowrap;
`;

export const Mono: React.FC<any> = styled.p`
  font-family: monospace;
`;

export const Table: React.FC<any> = styled.table`
  display: table;
  padding-left: 2em;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
`;

export const Body: React.FC<any> = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const Img: React.FC<{ alt: string, isMobile: boolean }> = styled.img`
  width: ${({isMobile}) => isMobile ? '90%' : '50%'};
  height: ${({isMobile}) => isMobile ? null : '50%'};
`;

export const Row: React.FC<any> = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const Key: React.FC<any> = styled.td`
  display: table-cell;
  vertical-align: inherit;
  text-shadow: none;
`;

export const Value: React.FC<any> = styled.td`
  font-family: monospace;
  text-align: right;
  padding-left: 2em;
  color: #ffcd5c;
  text-shadow: 0 0 0.1em #c77d14;
`;

export const Content: React.FC<any> = styled.div`
  font-size: 0.8em;
  color: #bbbaba;
  text-shadow: none;
`;

export const Separator: React.FC<any> = styled.hr`
  border: 0;
  border-top: 8px dotted #7900bf;
  margin-top: 0;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
`;

export const Tertiary: React.FC<any> = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

export const Link: React.FC<any> = styled.a`
  color: #ffb600;
  white-space: nowrap;

  &:hover {
    color: white;
    text-shadow: 0 0 0.2em #c77d14;
    text-shadow: 0 0 0.4em #ffb600;
  }
`
