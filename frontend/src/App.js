import { GlobalStyle, Wrapper } from "./styles/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/index";
import { Home, SignUp, SignIn } from "./pages/index";

function App() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Navbar />
            </Wrapper>
            {/* <Home /> */}
            <SignIn />
            <SignUp />
        </>
    );
}

export default App;
