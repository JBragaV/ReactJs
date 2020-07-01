import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Autores</Link></li>
            <li><Link to="/">Livros</Link></li>
            <li><Link to="/">Jocimar</Link></li>
            <li><Link to="/">DADADA</Link></li>
            <li><Link to="/sobre">Sobre Link gente</Link></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;