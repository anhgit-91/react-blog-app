import { useState } from "react";

import {
    SignUpContainer,
    FormContainer,
    SignUpForm,
    FormInput,
    FormPolicy,
    SignInWrapper,
} from "./signUp.styled";

const SignUp = () => {
    return (
        <>
            <SignUpContainer>
                <SignInWrapper />
                <FormContainer>
                    <SignUpForm>
                        <h1>Join Copyblogger.</h1>
                        <FormInput>
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                            <button className="center">Sign Up</button>

                            <button>
                                <div></div>
                                <span>Sign up with Google</span>
                                <div></div>
                            </button>
                            <p>
                                Already have an account?{" "}
                                <span className="largeFont">Sign in</span>
                            </p>
                        </FormInput>
                        <FormPolicy>
                            <p>
                                Click “Sign up” to agree to Medium’s{" "}
                                <u>Terms of Service</u> and acknowledge that
                                Medium’s <u>Privacy Policy</u> applies to you.
                            </p>
                        </FormPolicy>
                    </SignUpForm>
                </FormContainer>
            </SignUpContainer>
        </>
    );
};
export default SignUp;
