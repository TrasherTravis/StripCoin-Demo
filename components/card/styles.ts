import React from 'react';
import styled from 'styled-components';

export const Wrapper: React.FC<{ isMobile?: boolean }> = styled.div`
  padding: ${({isMobile}) => isMobile ? 0 : '0.5em 2em 0.5em 2em'};
  margin: ${({isMobile}) => isMobile ? '3em 0 3em 0' : '1em'};
`;

export const CardHeader: React.FC<any> = styled.div`
  background: #7900bf;
  color: white;
  padding: 0.3em 1em 0.1em 1em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  font-family: 'STRIP';
  text-shadow: 2px 2px 0 black;
`;

export const CardBody: React.FC<{ isMobile?: boolean }> = styled.div`
  ${({isMobile}) => isMobile ? 'display: block' : 'display: flex'};
  color: #bbbaba;
  background: rgba(0, 0, 0, 0.95);
`;

export const Instructions: React.FC<{ isMobile: boolean }> = styled.div`
  flex-basis: ${({isMobile}) => isMobile ? '100%' : '50%'};
  padding: 0.5em 2em 0.5em 0.5em;
  ${({isMobile}) => isMobile ? 'border-bottom:8px dotted #7900bf' : 'border-right: 8px dotted #7900bf;'};
`;

export const Functional: React.FC<{ isMobile: boolean }> = styled.div`
  flex-basis: ${({isMobile}) => isMobile ? '100%' : '50%'};
  padding: 0.5em 1em 0.5em 3em;
`;

export const BuyFunctional: React.FC<{isMobile: boolean}> = styled.div`
  background: rgba(0, 0, 0, 0.95);
  padding: 0.5em;
  color: white;
  border-top: 8px dotted #7900bf;
`

