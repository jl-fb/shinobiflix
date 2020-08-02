import React from "react";
import styled, { css } from "styled-components";
import Menu from "../Menu";
import Footer from "../Footer";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 20px 5% 5% 0px;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

// eslint-disable-next-line react/prop-types
function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
