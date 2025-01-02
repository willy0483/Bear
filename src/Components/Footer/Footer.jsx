import { FooterStyled } from "./Footer.Styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-content">
        <p>&copy; 2023 MyWebsite. All rights reserved.</p>
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            FB
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TW
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            IG
          </a>
        </div>
      </div>
    </FooterStyled>
  );
};
