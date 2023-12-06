import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 9rem;
    padding-bottom: 9rem;
`;

export const HeaderLeft = styled.div`
    width: 55rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    h1 {
        font-size: 8rem;
        font-weight: 700;
        color: var(--color-primary);
        line-height: 1;
    }

    p {
        font-size: 2rem;
        line-height: 1.5;
        font-family: var(--font-text);
        color: var(--color-text);
    }

    a {
        padding: 0.5rem 1.2rem;
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
`;

export const HeaderRight = styled.div``;
