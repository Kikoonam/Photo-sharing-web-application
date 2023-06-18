import styled from "styled-components";
import Avatar from '@mui/material/Avatar'


const Post =(props)=>{
 return (
   <PostContainer>
        <PostHeader>
            <PostAvatar> 
            <Avatar>H</Avatar>
             </PostAvatar>
       
        <h3>{props.username}</h3>
        {/*header -> avatar + username*/ }
        </PostHeader>
        <PostImage src={props.imageURL}/>
        {/* username + caption */}
         <PostCaption>
            <strong>{props.username}</strong>
            {props.caption}
            
         </PostCaption>
         </PostContainer> );   
        
}

export default Post;

const PostContainer = styled.div`
    max-width:500px;
    background-color:white;
    border:1px solid lightgray;
    margin-bottom:45px;
`
const PostImage= styled.img`
 width:100%;
 object-fit:contain;
 border-top:1px solid lightgray;
 border-bottom:1px solid lightgray;

`
const PostCaption= styled.h4`
font-weight:normal;
`
const PostHeader= styled.div `
display:flex;
align-items:center;
padding:20px 10px;
`
const PostAvatar= styled.div`
margin-right:10px;
`