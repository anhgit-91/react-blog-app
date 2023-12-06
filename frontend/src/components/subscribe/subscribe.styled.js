import styled from "styled-components";

export const SubContainer = styled.section`
    margin-top: 12vh;
    margin-bottom: 2vh;
    display: flex;
    justify-content: space-between;
    gap: 5rem;

    h2 {
        flex: 1;
        font-size: 4.2rem;
        font-weight: 700;
        line-height: 1.2;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
`;

export const SubBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    background-color: var(--bg-subscribe);
    text-align: center;
    gap: 2rem;
    box-shadow: var(--shadow-article);

    h4 {
        font-size: 2.3rem;
        font-weight: 600;
        line-height: 1.5;
    }

    input {
        width: 100%;
        padding: 1.4rem 1rem;
        border: 1px solid var(--color-border);
        border-radius: 3rem;
        font-size: 1.6rem;
        font-family: var(--font-primary);
        text-align: center;
    }

    button {
        width: 100%;
        padding: 1.4rem 1rem;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 500;
        background-color: var(--color-primary);
        color: white;
        border-radius: 3rem;
        border: 2px solid transparent;
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: white;
            color: var(--color-header);
            border: 2px solid var(--color-primary);
        }
    }

    p {
        font-size: 1.3rem;
        font-weight: 500;
        font-family: var(--font-text);
        color: var(--color-text);
    }
`;
