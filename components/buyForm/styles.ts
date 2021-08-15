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

export const ErrorContainer: React.FC<any> = styled.div`
  color: red;
  font-size: 1em;
`;

export const Row: React.FC<{isMax?: boolean}> = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  color: ${({isMax})=> isMax ? '#00ff00 ' : null}
`;


export const Strong: React.FC<any> = styled.strong`
  font-weight: normal;
  color: #fff6e2;
  text-shadow: 0 0 0.2em #ffb600;
  white-space: nowrap;
`;


export const Text: React.FC<any> = styled.h3`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export const SwapArrow: React.FC<{ isMobile: boolean }> = styled.span`
  display: inline-block;
  background-image: ${({isMobile}) => isMobile ? `url('icons/arrow-down.png')` : `url("icons/arrow-ltr.png")`};
  ${({isMobile}) => isMobile ? 'text-align: center' : null};
  background-size: cover;
  height: 2em;
  width: 2em;
  margin: 0 1em 0 1em;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const ButtonAndReceipt: React.FC<any> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
`;

export const InputContainer: React.FC<{ isMobile?: boolean }> = styled.div`
  display: flex;
  flex-direction: ${({isMobile}) => isMobile ? 'column' : 'row'};
  align-items: center;
`;

export const PrimaryText: React.FC<any> = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

export const Receipt: React.FC<any> = styled.div`
  margin: 5px;
`;

export const Pre: React.FC<any> = styled.pre`
  text-align: right;
  font-size: 0.7em;
`;
