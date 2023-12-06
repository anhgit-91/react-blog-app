import { Container } from "../../styles/index";
import { HeaderContainer, HeaderLeft, HeaderRight } from "./header.styled";

const header = () => {
    return (
        <Container>
            <HeaderContainer>
                <HeaderLeft>
                    <h1>Stay curious.</h1>
                    <p>
                        Discover stories, thinking, and expertise from writers
                        on any topic.
                    </p>
                    <a href="index.html">Start reading</a>
                </HeaderLeft>
                <HeaderRight>
                    <p>something</p>
                    <p>something</p>
                </HeaderRight>
            </HeaderContainer>
        </Container>
    );
};
export default header;
