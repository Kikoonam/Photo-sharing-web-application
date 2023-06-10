import styled from "styled-components";
import Post from "./Post";
import { useState } from "react";

const Home = (props) => {
const [posts, setPost] = useState([
  {
    username:'Kundyz',
    caption: 'wow it works',
    imageUrl:'/Images/Background-image.jpg'
  },
  {  username:'Saiershanbayi',
  caption: 'wow it works',
  imageUrl:'/Images/Background-image.jpg'},
]);
  return <Container>
    <PostContainer>
    {posts.map((post)=>{
      return <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
    })}
    </PostContainer>
    </Container>
   
};
const Container = styled.main`
display: flex;
align-items: center;
justify-content: center;
background-color:#141414;
color:black;

`

const PostContainer=styled.div`
padding-top:100px;


` 


export default Home;

