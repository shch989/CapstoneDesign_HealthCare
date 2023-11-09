import React from 'react'
import styled from 'styled-components'
import TextIcon from '../images/text_icon.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
`

const NoneIcon = styled.img`
  height: 120px;
  width: 120px;
`

const Text1 = styled.p`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 30px;
  color: #8FA5AF;
  font-weight: bold;
`;

const Text2 = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 30px;
  color: #8FA5AF;
  font-weight: bold;
`;

const NoneDataText = () => {
  return (
    <Container>
      <NoneIcon src={TextIcon} alt="text_icon" />
      <Text1>원하시는 자막 파일을 업로드 해주세요 </Text1>
      <Text2>( 허용되는 확장자: txt, pdf, docx ) </Text2>
    </Container>
  )
}

export default NoneDataText
