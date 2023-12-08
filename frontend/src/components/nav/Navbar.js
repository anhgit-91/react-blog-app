import { Container } from "../../styles/index";
import { NavContainer, NavLogo, NavLinks } from "./nav.styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleSignIn } from "../../features/modal/modalSlice";

const Navbar = () => {
    const isVisible = useSelector((state) => state.modal.isSignInVisible);
    const dispatch = useDispatch();

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
                            <button onClick={() => dispatch(toggleSignIn())}>
                                Get started
                            </button>
                        </li>
                    </ul>
                </NavLinks>
            </NavContainer>
        </Container>
    );
};
export default Navbar;
