import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  background: #555b6e;
`;
export const HamburgerWrapper = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
export const BrandLogo = styled.div`
  margin-left: 1rem;
  .brand-link {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
  }
  .brand-link:hover {
    text-decoration: none;
  }
  @media (min-width: 769px) {
    margin-left: 0;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  ul {
    list-type: none;
    display: flex;
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .link {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    padding: 0 0.5rem;
  }
  .link:hover {
    text-decoration: underline;
  }
`;
