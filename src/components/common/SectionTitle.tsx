import React from 'react';
import styled from 'styled-components';

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <SectionTitleWrapper>
      <SectionTitleText className="reverse">{title}</SectionTitleText>
    </SectionTitleWrapper>
  );
}

export default SectionTitle;

const SectionTitleWrapper = styled.div`
  position: absolute;
  left: 0;
  margin-bottom: 800px;
  transform-origin: left top;
  transform: rotate(-90deg) translateX(-100%);
  width: max-content;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SectionTitleText = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5rem;
  font-size: 5rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    transform: none;
    font-size: 2.5rem;
  }
`;
