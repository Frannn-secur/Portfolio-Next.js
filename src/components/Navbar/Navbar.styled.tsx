import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;