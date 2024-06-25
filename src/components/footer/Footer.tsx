import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FooterStyled } from './FooterStyled';

export function Footer() {
  return (
    <FooterStyled>
      <footer className="footer">
        {/* <div className="name-container">
          <span className="developer-name">Alfredo González Polo</span>
        </div> */}
        <div className="contact-socialmedia-container">
          <a
            href="https://linkedin.com/in/alfredogonzalezpolo"
            target="_blank"
            aria-label="link to personal linkedin"
          >
            <AiFillLinkedin className="linkedin-logo" />
          </a>
          <a
            href="https://github.com/AlfredoGonzalezPolo"
            target="_blank"
            aria-label="link to personal github"
          >
            <AiFillGithub className="github-logo" />
          </a>
        </div>
      </footer>
    </FooterStyled>
  );
}
