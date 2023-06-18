import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { storage,database } from '../firebase';
import { selectUserName } from '../features/user/userSlice';
import {  useSelector } from "react-redux";
import { ref ,uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid'



const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [fileError, setFileError] = useState('');
  const [captionError, setCaptionError] = useState('');
  const [imageUpload,setImageUpload]=useState(' ');
  const [imageURl, setImageURl] = useState('');
  const userName = useSelector(selectUserName);
  

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];
    setImageUpload(imageFile);
    setSelectedImage(URL.createObjectURL(imageFile));
    setFileError('');
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
    setCaptionError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!selectedImage) {
      setFileError('Please choose an image.');
      return;
    }
    if (!caption) {
      setCaptionError('Please enter a caption.');
      return;
    }

    if (caption.split(' ').length > 50) {
      setCaptionError('Caption should not exceed 50 words.');
      return;
    }

 const postId= v4();
// Create a reference to 'images/mountains.jpg'
const imageRef = ref(storage, `images/${postId}`);
 uploadBytes(imageRef,imageUpload).then(()=>{
  alert('Image uploaded')
  getDownloadURL(ref(storage, `images/${postId}`)).then((url)=>{
    setImageURl(url);
   })
})
     
    // Reset the form after successful submission
    setSelectedImage(null);
    setCaption('');
    setImageURl('');
    setImageUpload(null);

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
            
            {fileError && <ErrorText>{fileError}</ErrorText>}
          </FileInputContainer>
          
          <TextField
          label="Caption"
          value={caption}
          onChange={handleCaptionChange}
          fullWidth
          multiline
          rows={4}
        />
          {captionError && <ErrorText>{captionError}</ErrorText>}
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
const ErrorText = styled.div`
  color: red;
`;

export default ImageUpload;
