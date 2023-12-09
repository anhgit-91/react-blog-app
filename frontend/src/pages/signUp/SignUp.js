import { useState } from "react";
import { Link } from "react-router-dom";

import {
    SignUpContainer,
    FormContainer,
    SignUpForm,
    FormInput,
    FormPolicy,
    SignInWrapper,
    Error,
} from "./signUp.styled";

const SignUp = () => {
    // State for the form
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // Functionality for the form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(false);
            const res = await fetch(
                "http://localhost:8000/backend/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await res.json();
            console.log(data);
            setLoading(false);
            if (data.success === false) {
                setError(true);
                return;
            }
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <>
            <SignUpContainer>
                <SignInWrapper />
                <FormContainer>
                    <SignUpForm>
                        <h1>Join Copyblogger.</h1>
                        <FormInput onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                            />
                            <button className="center" disabled={loading}>
                                {loading ? "Loading..." : "Sign Up"}
                            </button>

                            <button>
                                <div></div>
                                <span>Sign up with Google</span>
                                <div></div>
                            </button>
                            <p>
                                Already have an account?{" "}
                                <Link to="/login">
                                    <span className="largeFont">Sign in</span>
                                </Link>
                            </p>
                            {error && (
                                <Error>
                                    <p>
                                        There was a problem signing you up.
                                        Please try again.
                                    </p>
                                </Error>
                            )}
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
