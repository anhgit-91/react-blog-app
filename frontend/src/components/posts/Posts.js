import { Container } from "../../styles";
import { PostsContainer } from "./posts.styled";
import { Post, LargePost } from "../index";

const Posts = () => {
    return (
        <Container>
            <PostsContainer>
                <LargePost prop="itemLeft" />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <LargePost prop="itemRight" />
                <Post />
                <Post />
                <Post />
            </PostsContainer>
        </Container>
    );
};
export default Posts;
