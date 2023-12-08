import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage, toggleSignIn } from "../../features/modal/modalSlice";
import { FaTimes } from "react-icons/fa";

import {
    SignUpContainer,
    FormContainer,
    SignUpForm,
    FormInput,
    FormPolicy,
    SignInWrapper,
    CloseButton,
} from "./signUp.styled";

const SignUp = () => {
    const isVisible = useSelector((state) => state.modal.isSignInVisible);
    const currentPage = useSelector((state) => state.modal.currentPage);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    // Handle sign up input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle sign up
    const handleSignUp = async () => {
        try {
            const response = await fetch("/backend/route/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                console.log("Sign-up successful:", data.user);
                // Handle successful sign-up, e.g., redirect or show a success message
            } else {
                console.error("Sign-up failed:", data.message);
                // Handle sign-up failure, e.g., show an error message
            }
        } catch (error) {
            console.error("Error during sign-up:", error);
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <>
            {currentPage === "signUp" && (
                <SignUpContainer>
                    <SignInWrapper />
                    <FormContainer>
                        <CloseButton
                            onClick={() => {
                                dispatch(toggleSignIn());
                                dispatch(changePage("signIn"));
                            }}
                        >
                            <FaTimes />
                        </CloseButton>
                        <SignUpForm>
                            <h1>Join Copyblogger.</h1>
                            <FormInput>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    onChange={(e) => handleChange(e)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={(e) => handleChange(e)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) => handleChange(e)}
                                />
                                <button
                                    className="center"
                                    onClick={() => handleSignUp()}
                                >
                                    Sign Up
                                </button>

                                <button>
                                    <div></div>
                                    <span>Sign up with Google</span>
                                    <div></div>
                                </button>
                                <p>
                                    Already have an account?{" "}
                                    <span
                                        className="largeFont"
                                        onClick={() =>
                                            dispatch(changePage("signIn"))
                                        }
                                    >
                                        Sign in
                                    </span>
                                </p>
                            </FormInput>
                            <FormPolicy>
                                <p>
                                    Click “Sign up” to agree to Medium’s{" "}
                                    <u>Terms of Service</u> and acknowledge that
                                    Medium’s <u>Privacy Policy</u> applies to
                                    you.
                                </p>
                            </FormPolicy>
                        </SignUpForm>
                    </FormContainer>
                </SignUpContainer>
            )}
        </>
    );
};
export default SignUp;
