import styled from "styled-components";

export const PostItem = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding: 6rem 4rem;
    grid-area: ${(props) => props.gridArea};
`;

export const PostItemHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        object-fit: cover;
        cursor: pointer;
    }

    p {
        font-size: 1.4rem;
        color: var(--color-text);
        font-weight: bold;
        cursor: pointer;
    }

    span {
        font-size: 1.3rem;
        font-style: italic;
        font-family: var(--font-text);
        color: var(--color-secondary);
    }
`;

export const PostItemContent = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        font-size: 4.8rem;
        font-weight: 700;
        color: var(--color-text);
        line-height: 1;
        margin-bottom: 1.5;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            color: var(--color-primary);
        }
    }

    .category {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--color-secondary);

        span {
            background-color: var(--bg-category);
            padding: 0 1rem;
            margin-right: 10px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
                color: var(--color-text);
            }
        }
    }

    p {
        font-size: 1.6rem;
        font-family: var(--font-text);
        color: var(--color-text);
        line-height: 2.5rem;
        margin-top: 2rem;
    }
`;

export const PostItemLink = styled.a`
    margin-top: 3rem;
    padding: 0.5rem 1.2rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 3rem;
    border: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    background-color: white;
    color: var(--color-header);
    border: 2px solid var(--color-primary);

    &:hover {
        color: white;
        background-color: var(--color-primary);
    }
`;
