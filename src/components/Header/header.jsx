import "./header.css";
import menuImage from '../../pages/img/menu.png'; 
import logoImage from '../../pages/img/site-logo.png'; 

export const Header = ({ showMenu }) => {
  return (
    <header>
      <div className="header__content container">
        <div className="site-logo" style={{ backgroundImage: `url(${logoImage})` }}></div>

        {showMenu ? (
        <div className="navigation" id="navigation">
          <button className="nav-btn" style={{ backgroundImage: `url(${menuImage})` }}></button>
          <nav className="rollout-nav nav-closed">
            <a href="/#home">domů</a>
            <a href="/#menu">menu</a>
            <a href="/#gallery">galerie</a>
            <a href="/#contact">kontakt</a>
          </nav>
        </div>
        ) : (
        <nav className="inline-nav">
          <a href="/">Hlavní stránka</a>
        </nav>

        )
        }
      </div>
    </header>
  )
} 