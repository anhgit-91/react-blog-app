import styled from "styled-components";

export const Polygon = styled.div`
    position: relative;
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 110rem;
        background-color: var(--bg-category);
        clip-path: polygon(0 66.3rem, 150rem 66.3rem, 180rem 170rem, 0 170rem);
        z-index: -1;
    }
`;

export const FooterContainer = styled.footer`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 6rem;
    padding-bottom: 6rem;

    p:first-of-type {
        max-width: 70rem;
        text-align: center;
        font-size: 1.2rem;
        font-style: italic;
        line-height: 1.5;
        margin-bottom: 3rem;
    }

    p {
        font-size: 1.2rem;
    }
`;

export const FooterLine = styled.div`
    width: 10%;
    height: 1px;
    background-color: var(--color-secondary);
    margin: 0 auto 6rem;
`;

export const FooterLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;

    li {
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--color-text);
        list-style-type: none;
        cursor: pointer;
    }
`;
