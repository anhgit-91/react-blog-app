import { Footer, Header, Posts, Subscribe } from "../../components/index";
import { HomeContainer } from "./home.styled";

const Home = () => {
    return (
        <>
            <Header />
            <HomeContainer>
                <Posts />
                <Subscribe />
                <Footer />
            </HomeContainer>
        </>
    );
};
export default Home;
