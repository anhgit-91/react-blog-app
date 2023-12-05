import { NavContainer, NavLogo, NavLinks, NavRight } from "./nav.styled";

const Navbar = () => {
    return (
        <NavContainer>
            <NavLogo src="../../../public/images/logo.png" alt="logo" />
            <NavLinks>
                <ul>
                    <li>Home</li>
                    <li>Articles</li>
                    <li>About</li>
                    <li>Write</li>
                </ul>
            </NavLinks>
            <NavRight>
                <li>Sign In</li>
                <li>Sign Up</li>
            </NavRight>
        </NavContainer>
    );
};
export default Navbar;
