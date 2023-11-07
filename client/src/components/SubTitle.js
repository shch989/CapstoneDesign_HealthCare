import React from 'react';
import styled from 'styled-components';

const SubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  margin: 0 auto;
  margin-top: 20px;
`;

const SubTitleText = styled.h2`
  color: #f0f0f0;
`;

const SubTitle = () => {
  return (
    <SubTitleContainer>
      <SubTitleText>캡스톤 주제에 대한 간단한 설명</SubTitleText>
    </SubTitleContainer>
  );
}

export default SubTitle;
