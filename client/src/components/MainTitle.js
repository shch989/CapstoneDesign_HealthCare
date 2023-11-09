import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 50px;
  color: #8FA5AF;
`;

const MainTitle = () => {
  return (
    <TitleContainer>
      <Title>AI 기반 영상시청 보조 장치</Title>
    </TitleContainer>
  );
}

export default MainTitle;