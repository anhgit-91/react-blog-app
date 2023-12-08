import {
    SignInContainer,
    FormContainer,
    SignInForm,
    FormInput,
    SignInWrapper,
    FormPolicy,
    CloseButton,
} from "./signIn.styled";
import { FaTimes } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { toggleSignIn, changePage } from "../../features/modal/modalSlice";

const SignIn = () => {
    const isVisible = useSelector((state) => state.modal.isSignInVisible);
    const currentPage = useSelector((state) => state.modal.currentPage);
    const dispatch = useDispatch();

    if (!isVisible) {
        return null;
    }

    return (
        <>
            {currentPage === "signIn" && (
                <SignInContainer>
                    <SignInWrapper />
                    <FormContainer>
                        <CloseButton onClick={() => dispatch(toggleSignIn())}>
                            <FaTimes />
                        </CloseButton>
                        <SignInForm>
                            <h1>Welcome back.</h1>
                            <FormInput>
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <button className="center">Sign In</button>
                                <button>
                                    <div></div>
                                    <span>Sign in with Google</span>
                                    <div></div>
                                </button>
                                <p>
                                    NO account?{" "}
                                    <span
                                        className="largeFont"
                                        onClick={() =>
                                            dispatch(changePage("signUp"))
                                        }
                                    >
                                        Create one
                                    </span>
                                </p>
                            </FormInput>
                            <FormPolicy>
                                <p>
                                    Forgot email or trouble signing in?{" "}
                                    <span>Get help</span>
                                </p>
                                <p>
                                    Click “Sign in” to agree to Medium’s{" "}
                                    <u>Terms of Service</u> and acknowledge that
                                    Medium’s <u>Privacy Policy</u> applies to
                                    you.
                                </p>
                            </FormPolicy>
                        </SignInForm>
                    </FormContainer>
                </SignInContainer>
            )}
        </>
    );
};
export default SignIn;
