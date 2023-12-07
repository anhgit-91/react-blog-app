import { GlobalStyle, Wrapper } from "./styles/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar, SignIn, SignUp } from "./components/index";
import { Home } from "./pages/index";

function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Navbar />
            </Wrapper>
            <Home />
            <SignIn />
            <SignUp />
        </>
    );
}

export default App;
