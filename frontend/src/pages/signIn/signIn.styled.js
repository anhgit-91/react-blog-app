import styled from "styled-components";
export const SignInContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
`;

export const FormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 67.8rem;
    min-height: 50rem;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 0.4rem;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
`;

export const SignInForm = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    width: 100%;
    height: 100%;
    padding: 4.4rem 5.6rem;
    text-align: center;
    flex: 1 0 auto;
    z-index: 30;

    h1 {
        font-size: 2.8rem;
        font-weight: 600;
        line-height: 2.4rem;
        margin-bottom: 2rem;
    }

    p {
        padding: 0 1.6rem;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 2.4rem;
        margin-top: 2rem;

        a {
            font-weight: 600;

            &:hover {
                text-decoration: underline;
            }
        }

        .largeFont {
            font-size: 1.6rem;
        }
    }
`;

export const SignInFormButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.4rem;
    margin-top: 2.4rem;

    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30rem;
        height: 4rem;
        margin-bottom: 1.6rem;
        padding: 0 1.6rem;
        border-radius: 15rem;
        border: 1px solid black;
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
        margin-top: 2rem;
    }
`;

export const Icon = styled.svg`
    /* margin-right: auto; */
    width: 2.1rem;
    height: 2.1rem;
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 30;
    cursor: pointer;
`;
