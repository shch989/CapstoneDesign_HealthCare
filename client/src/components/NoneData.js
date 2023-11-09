import React from 'react'
import styled from 'styled-components'
import NoneDataText from './NoneDataText'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`

const DataBox = styled.div`
  width: 60%;
  height: 60vh;
  padding: 15px;
  border: 2px solid #007aff;
  border-radius: 10px;
  background-color: #3f3f3f;
  border-style: dashed;
`

const NoneData = () => {
  return (
    <Container>
      <DataBox>
        <NoneDataText />
      </DataBox>
    </Container>
  )
}

export default NoneData
