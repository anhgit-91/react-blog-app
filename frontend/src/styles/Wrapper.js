import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50rem;
        background-color: var(--color-primary);
        opacity: 0.1;
    }
`;
