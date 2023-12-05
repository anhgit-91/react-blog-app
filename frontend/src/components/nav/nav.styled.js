import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 100%;
    height: 7.2rem;
    display: flex;
    align-items: center;
`;

export const NavLogo = styled.img`
    flex: 3;
`;

export const NavLinks = styled.div`
    max-width: 1200px;
    flex: 6;

    ul {
        display: flex;
        align-items: center;
        list-style: none;

        li {
            margin-left: 2.4rem;
            font-size: 1.6rem;
            font-weight: 500;
            color: var(--color-secondary);
            cursor: pointer;
        }
    }
`;

export const NavRight = styled.div`
    flex: 3;

    ul {
        display: flex;
        align-items: center;
        list-style: none;
    }
`;
