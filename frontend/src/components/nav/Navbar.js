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
                        <li>
                            <button>Get started</button>
                        </li>
                    </ul>
                </NavLinks>
            </NavContainer>
        </Container>
    );
};
export default Navbar;
