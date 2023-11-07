import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #f0f0f0;
`;

const MainTitle = () => {
  return (
    <TitleContainer>
      <Title>캡스톤 디자인</Title>
    </TitleContainer>
  );
}

export default MainTitle;