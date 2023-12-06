import styled from "styled-components";

export const PostsContainer = styled.main`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 1rem;
    grid-template-areas:
        "itemLeft itemLeft ."
        "itemLeft itemLeft ."
        ". . ."
        ". itemRight itemRight"
        ". itemRight itemRight";

    padding-top: 4rem;
`;
