import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  position: relative;
  max-width: 100%;
  height: 3rem;
  justify-content: space-between;
  align-items: flex-start;

  .contact-socialmedia-container {
    display: flex;
    position: absolute;
  }

  .linkedin-logo,
  .github-logo {
    position: relative;
    bottom: 0;
    color: #000000;
    font-size: 3rem;
  }
`;
