import styled from "styled-components";
export const SignInContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
`;

export const SignInWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    opacity: 0.95;
    z-index: 6;
`;

export const FormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 67.8rem;
    min-height: 60rem;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 0.4rem;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
    background-color: white;
    z-index: 50;
`;

export const SignInForm = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 4.4rem 5.6rem;
    gap: 5rem;
    text-align: center;
    flex: 1 0 auto;

    h1 {
        font-size: 4rem;
        font-weight: 600;
        line-height: 2.4rem;
    }
`;

// INPUTS && BUTTONS
export const FormInput = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    input {
        width: 30rem;
        height: 4rem;
        padding: 0.8rem 1.6rem;
        border-radius: 15rem;
        border: 1px solid black;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4rem;
        color: var(--color-text);
        background-color: white;
        transition: all 0.2s ease-in-out;

        &:hover {
            box-shadow: var(--shadow-article);
        }
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary);
        border: 2px solid transparent;
        color: white;
        &:hover {
            background-color: white;
            color: var(--color-primary);
            border: 2px solid var(--color-primary);
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30rem;
        height: 4rem;
        padding: 0 1.6rem;
        border-radius: 15rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4rem;
        color: var(--color-header);
        background-color: white;
        border: 1px solid black;
        transition: all 0.2s ease-in-out;

        &:hover {
            box-shadow: var(--shadow-article);
        }

        div {
            width: 2.1rem;
            height: 2.1rem;
        }
    }

    p {
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 2.4rem;
        margin-top: -1.6rem;
        .largeFont {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--color-primary);
            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;

// POLICY
export const FormPolicy = styled.div`
    p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 2.4rem;
        padding: 0 1.6rem;

        span {
            font-weight: 600;
            color: var(--color-primary);

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;

// CLOSE BUTTON
export const CloseButton = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 33;
    cursor: pointer;
`;
