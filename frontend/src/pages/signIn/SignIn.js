import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    SignInContainer,
    FormContainer,
    SignInForm,
    FormInput,
    FormPolicy,
    Error,
} from "./signIn.styled";

const SignIn = () => {
    // State for the form
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

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
                "http://localhost:8000/backend/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await res.json();
            setLoading(false);
            if (data.success === false) {
                setError(true);
                return;
            }
            navigate("/");
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };
    return (
        <>
            <SignInContainer>
                <FormContainer>
                    <SignInForm>
                        <h1>Welcome back.</h1>
                        <FormInput onSubmit={handleSubmit}>
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
                                {loading ? "Loading..." : "Sign In"}
                            </button>
                            <button>
                                <div></div>
                                <span>Sign in with Google</span>
                                <div></div>
                            </button>
                            <p>
                                NO account?{" "}
                                <Link to="/register">
                                    <span className="largeFont">
                                        Create one
                                    </span>
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
