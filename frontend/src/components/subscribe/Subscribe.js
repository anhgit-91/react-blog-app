import { SubContainer, SubBox } from "./subscribe.styled";
import { Container } from "../../styles";

const Subscribe = () => {
    return (
        <Container>
            <SubContainer>
                <SubBox>
                    <h4>
                        Want to understand the future of content marketing? Get
                        our free guide, The Killer and the Poet:
                    </h4>
                    <input type="text" name="" id="" placeholder="Email*" />
                    <button>Subscribe</button>
                    <p>We won't send you spam. Unsubscribe at any time.</p>
                </SubBox>
                <h2>Get free access to proven marketing training.</h2>
            </SubContainer>
        </Container>
    );
};
export default Subscribe;
