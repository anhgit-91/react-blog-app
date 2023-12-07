import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../features/modal/modalSlice";

import {
    SignInContainer,
    FormContainer,
    SignInForm,
    SignInFormButtons,
    Icon,
    CloseButton,
} from "./signIn.styled";

const SignIn = () => {
    const isSignInVisible = useSelector((state) => state.modal.isSignInVisible);
    const dispatch = useDispatch();

    const handleSwitch = () => {
        dispatch(toggleModal("signIn"));
        dispatch(toggleModal("signUp"));
    };

    if (!isSignInVisible) {
        return null;
    }

    return (
        <>
            <SignInContainer>
                <FormContainer>
                    <SignInForm>
                        <h1>Welcome back.</h1>
                        <SignInFormButtons>
                            <button>
                                <Icon
                                    viewBox="-0.5 0 48 48"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    fill="#000000"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <title>Google-color</title>{" "}
                                        <desc>Created with Sketch.</desc>{" "}
                                        <defs> </defs>{" "}
                                        <g
                                            id="Icons"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fill-rule="evenodd"
                                        >
                                            {" "}
                                            <g
                                                id="Color-"
                                                transform="translate(-401.000000, -860.000000)"
                                            >
                                                {" "}
                                                <g
                                                    id="Google"
                                                    transform="translate(401.000000, 860.000000)"
                                                >
                                                    {" "}
                                                    <path
                                                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                        id="Fill-1"
                                                        fill="#FBBC05"
                                                    >
                                                        {" "}
                                                    </path>{" "}
                                                    <path
                                                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                        id="Fill-2"
                                                        fill="#EB4335"
                                                    >
                                                        {" "}
                                                    </path>{" "}
                                                    <path
                                                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                        id="Fill-3"
                                                        fill="#34A853"
                                                    >
                                                        {" "}
                                                    </path>{" "}
                                                    <path
                                                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                        id="Fill-4"
                                                        fill="#4285F4"
                                                    >
                                                        {" "}
                                                    </path>{" "}
                                                </g>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>
                                </Icon>
                                <span>Sign in with Google</span>
                                <div></div>
                            </button>
                            <button>
                                <Icon
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                                            fill="#080341"
                                        ></path>{" "}
                                    </g>
                                </Icon>
                                <span>Sign in with Email</span>
                                <div></div>
                            </button>
                            <p>
                                NO account?{" "}
                                <a
                                    className="largeFont"
                                    href="#"
                                    onClick={() => handleSwitch()}
                                >
                                    Create one
                                </a>
                            </p>
                            <p>
                                Forgot email or trouble signing in?{" "}
                                <a href="#">Get help</a>
                            </p>
                        </SignInFormButtons>

                        <p>
                            Click “Sign in” to agree to Medium’s{" "}
                            <u>Terms of Service</u> and acknowledge that
                            Medium’s <u>Privacy Policy</u> applies to you.
                        </p>
                    </SignInForm>
                    <CloseButton
                        onClick={() => dispatch(toggleModal("signIn"))}
                    >
                        <svg
                            width="2.1rem"
                            height="2.1rem"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill="#000000"
                                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                                ></path>
                            </g>
                        </svg>
                    </CloseButton>
                </FormContainer>
            </SignInContainer>
        </>
    );
};
export default SignIn;