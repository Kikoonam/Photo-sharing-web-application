import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your image upload logic here
    console.log('Selected Image:', selectedImage);
    console.log('Caption:', caption);
    // Reset the form
    setSelectedImage(null);
    setCaption('');
  };

  return (
    <Container>
      <FormContainer>
        <h2 style={{ color: 'black' }}>Image Upload</h2>
        <form onSubmit={handleSubmit}>
          {selectedImage && <ImagePreview src={selectedImage} alt="Preview" />}
          <FileInputContainer>
            <input
              type="file"
              onChange={handleImageSelect}
              className="file-input"
            />
            <span>Choose Image</span>
          </FileInputContainer>
          <TextField
            label="Enter caption"
            variant="outlined"
            value={caption}
            onChange={handleCaptionChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: 'black' } }}
            inputProps={{ style: { color: 'black' } }}
          />
          <Button variant="contained" color="primary" type="submit">
            Upload
          </Button>
        </form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  max-width: 400px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const FileInputContainer = styled.label`
  display: inline-block;
  padding: 10px;
  background-color: #e0e0e0;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;

  .file-input {
    display: none;
  }
`;

export default ImageUpload;
