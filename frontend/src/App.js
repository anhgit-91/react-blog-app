import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, Wrapper } from "./styles/index";
import { Navbar } from "./components/index";
import { Home, SignIn, SignUp, About, Write } from "./pages/index";

function App() {
    return (
        <Router>
            <GlobalStyle />

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/write" element={<Write />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
