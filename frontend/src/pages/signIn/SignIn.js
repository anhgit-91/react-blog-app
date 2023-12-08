import {
    SignInContainer,
    FormContainer,
    SignInForm,
    FormInput,
    FormPolicy,
} from "./signIn.styled";

const SignIn = () => {
    return (
        <>
            <SignInContainer>
                <FormContainer>
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
                                <span className="largeFont">Create one</span>
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
                                Medium’s <u>Privacy Policy</u> applies to you.
                            </p>
                        </FormPolicy>
                    </SignInForm>
                </FormContainer>
            </SignInContainer>
        </>
    );
};
export default SignIn;
