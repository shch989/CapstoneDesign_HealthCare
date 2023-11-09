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
  width: 80%;
  padding: 15px;
  border: 2px solid #007AFF;
  border-radius: 10px;
  background-color: #3f3f3f;
  text-align: center;
  font-size: 16px;
  color: #007AFF;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007AFF;
    color: #fff;
  }

  &:focus {
    outline: none;
    background-color: #007AFF;
    color: #fff;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const Text = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #007AFF;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: red; /* 에러 메시지 색상 설정 */
  font-weight: bold;
`;

const InputText = (props) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    const allowedExtensions = ['txt', 'pdf', 'docx'];

    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split('.').pop();
      if (!allowedExtensions.includes(fileExtension)) {
        setError('올바른 확장자가 아닙니다. 허용되는 확장자: txt, pdf, docx');
        setFile(null);
        return;
      }

      setError('');
      setFile(uploadedFile);
      props.uploadFileHandler()
    }
  };

  return (
    <Container>
      <InputBox htmlFor="fileInput">
        업로드할 파일을 선택하세요
      </InputBox>
      <HiddenInput
        type="file"
        id="fileInput"
        onChange={handleFileUpload}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {file && <Text>업로드된 파일: {file.name}</Text>}
    </Container>
  );
}

export default InputText;