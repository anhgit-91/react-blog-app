import { Container } from "../../styles/index";
import { NavContainer, NavLogo, NavLinks } from "./nav.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Container>
            <NavContainer>
                <NavLogo>
                    <h1>copyblogger</h1>
                </NavLogo>

                <NavLinks>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Articles</li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/write">Write</Link>
                        </li>
                        <li className="btn">
                            <Link to="/register">Get started</Link>
                        </li>
                    </ul>
                </NavLinks>
            </NavContainer>
        </Container>
    );
};
export default Navbar;
