import styled from "styled-components";

export const PostItem = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    padding: 4rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: var(--shadow-article);
    }
`;

export const PostItemHeader = styled.div`
    display: flex;
    align-items: center;

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
        font-weight: 600;
        cursor: pointer;
    }
`;

export const PostItemContent = styled.div`
    margin-top: 2rem;

    h3 {
        font-size: 2.2rem;
        font-weight: 600;
        color: var(--color-header);
        line-height: 3rem;
        margin-bottom: 2rem;
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
        p {
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
`;
