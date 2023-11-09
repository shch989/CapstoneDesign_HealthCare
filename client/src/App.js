import React, { Fragment, useState } from 'react'

// Components
import MainTitle from './components/MainTitle'
import SubTitle from './components/SubTitle'
import InputText from './components/InputText'
import NoneData from './components/NoneData'

const App = () => {
  const [file, setFile] = useState(false)

  const uploadFileHandler = (boole) => {
    setFile(boole)
  }

  return (
    <Fragment>
      <MainTitle />
      <SubTitle />
      <InputText uploadFileHandler={uploadFileHandler} />
      {!file && <NoneData />}
    </Fragment>
  )
}

export default App
