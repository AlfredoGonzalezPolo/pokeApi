import { HeaderStyled } from './HeaderStyled';

export function Header() {
  return (
    <HeaderStyled>
      <div className="header-container">
        <div className="logo-container">
          <img
            width={'300em'}
            src="/assets/pokemon-logo.webp"
            className="pokemon-logo"
            alt="Pokemon logo"
          />
        </div>
      </div>
    </HeaderStyled>
  );
}
