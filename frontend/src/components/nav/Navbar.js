import { Container } from "../../styles/index";
import { NavContainer, NavLogo, NavLinks } from "./nav.styled";

const Navbar = () => {
    return (
        <Container>
            <NavContainer>
                <NavLogo>
                    <h1>copyblogger</h1>
                </NavLogo>

                <NavLinks>
                    <ul>
                        <li>Home</li>
                        <li>Articles</li>
                        <li>About</li>
                        <li>Write</li>
                        <li>Sign In</li>
                        <li>
                            <span>Get started</span>
                        </li>
                    </ul>
                </NavLinks>
            </NavContainer>
        </Container>
    );
};
export default Navbar;
