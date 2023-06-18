import styled from "styled-components";
import Post from "./Post";
import { useEffect, useState } from "react";


const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
 
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://capture-share-847fd-default-rtdb.firebaseio.com/posts.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong !");
      }
      const responseData = await response.json();
      const loadedPosts = [];

      for (const key in responseData) {
        loadedPosts.push({
          id: key,
          username: responseData[key].username,
          caption: responseData[key].caption,
          imageURL: responseData[key].imageURL,
        });
        setPosts(loadedPosts);
        setIsLoading(false);
      };
     
    };
    fetchPosts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <Container>
      <PostsLoading>
        <p>Loading...</p>
      </PostsLoading>
      </Container>
    );
  }
  if (httpError) {
    return (
      <Container>
      <PostsError>
        <p>{httpError}</p>
      </PostsError>
      </Container>
    );
  }
  const postsList = posts.map((post) => (
    <Post
      id={post.id}
      key={post.key}
      username={post.username}
      imageURL={post.imageURL}
      caption={post.caption}
    />
  ));

  return (
    <Container>
      <PostContainer>{postsList}</PostContainer>
    </Container>
  );
};
const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #141414;
  color: black;
`;

const PostContainer = styled.div`
  padding-top: 100px;
`;
const PostsLoading = styled.section`
  text-align: center;
  color: white;
  padding-top: 100px;
`;
const PostsError = styled.section`
  text-align: center;
  color: red;
  padding-top: 100px;
`;

export default Home;
