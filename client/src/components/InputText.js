import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const InputBox = styled.label`
  width: 60%;
  padding: 15px;
  border: 2px solid ${props => (props.hasError ? 'red' : '#007aff')};
  border-radius: 10px;
  background-color: #3f3f3f;
  text-align: center;
  font-size: 16px;
  color: ${props => (props.hasError ? 'red' : '#007aff')};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #007aff;
    border: 2px solid #007aff;
    color: #fff;
  }

  &:focus {
    outline: none;
    background-color: #007aff;
    color: #fff;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const InputText = (props) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [click, setClick] = useState(false);

  const handleFileUpload = (e) => {
    setClick(true);
    const uploadedFile = e.target.files[0];
    const allowedExtensions = ['txt', 'pdf', 'docx'];

    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split('.').pop();
      if (!allowedExtensions.includes(fileExtension)) {
        setError('올바른 확장자가 아닙니다. 허용되는 확장자: txt, pdf, docx');
        props.uploadFileHandler(false);
        setFile(null);
        return;
      }

      setError('');
      setFile(uploadedFile);
      props.uploadFileHandler(true);
    }
  };

  return (
    <Container>
      <InputBox htmlFor="fileInput" hasError={!!error}>
        {click ? (error ? error : file ? `업로드된 파일: ${file.name}` : '업로드할 파일을 선택하세요') : '업로드할 파일을 선택하세요'}
      </InputBox>
      <HiddenInput type="file" id="fileInput" onChange={handleFileUpload} />
    </Container>
  );
};

export default InputText;