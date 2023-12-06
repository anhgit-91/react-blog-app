import { GlobalStyle, Wrapper } from "./styles/index";
import { Navbar } from "./components/index";
import { Home } from "./pages/index";

function App() {
    return (
        <Wrapper>
            <GlobalStyle />
            <Navbar />
            <Home />
        </Wrapper>
    );
}

export default App;
