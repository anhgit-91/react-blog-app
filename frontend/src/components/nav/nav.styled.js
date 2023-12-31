import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 100%;
    height: 7.2rem;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`;

export const NavLogo = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: 600;
        cursor: pointer;
    }
`;

export const NavLinks = styled.div`
    max-width: 1200px;

    ul {
        display: flex;
        align-items: center;
        list-style: none;

        li {
            margin-left: 2.4rem;
            font-size: 1.6rem;
            font-weight: 500;

            a {
                color: var(--color-secondary);
                text-decoration: none;
                cursor: pointer;
                transform: all 0.2s ease-in-out;

                &:hover {
                    color: var(--color-primary);
                }
            }
        }

        .btn a {
            padding: 0.5rem 1.2rem;
            text-align: center;
            background-color: var(--color-primary);
            color: white;
            border-radius: 3rem;
            border: 2px solid transparent;
            transition: all 0.2s ease-in-out;

            &:hover {
                background-color: white;
                color: var(--color-primary);
                border: 2px solid var(--color-primary);
            }
        }
    }
`;
