import React from 'react'
import styled from 'styled-components'

const SubTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70%;
  margin: 0 auto;
`

const SubTitleText = styled.h4`
  text-align: center;
  color: #8fa5af;
`

const SubTitle = () => {
  return (
    <SubTitleContainer>
      <SubTitleText>
        해당 프로젝트는 소리 정보와 배리어 프리 자막의 정보를 복합적으로
        고려하는
        <br />
        Multi-Modal을 통해 청각 장애인의 미디어 서비스 이용의 질적 향상을
        <br />
        위해 개발되었습니다.
      </SubTitleText>
    </SubTitleContainer>
  )
}

export default SubTitle
