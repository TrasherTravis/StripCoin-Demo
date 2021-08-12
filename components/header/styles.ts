import React from 'react';
import styled from 'styled-components';

export const ContainerLogo: React.FC<{ isMobile?: boolean }> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image: React.FC<{ isMobile?: boolean, src?: string, alt?: string}> = styled.img`
  ${({isMobile}) => !isMobile ? 'padding: 1em' : 'width: 80%'};
`;