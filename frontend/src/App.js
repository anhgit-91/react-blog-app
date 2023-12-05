import { GlobalStyle, Container } from "./styles/index";
import { Navbar } from "./components/index";

function App() {
    return (
        <Container>
            <GlobalStyle />
            <Navbar></Navbar>
        </Container>
    );
}

export default App;
