import React, { Fragment, useState } from 'react'

// Components
import MainTitle from './components/MainTitle'
import SubTitle from './components/SubTitle'
import InputText from './components/InputText'
import Data from './components/Data'
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
      {file ? <Data /> : <NoneData />}
    </Fragment>
  )
}

export default App
