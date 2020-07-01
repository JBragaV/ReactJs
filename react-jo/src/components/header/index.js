import React from 'react';

import ItensNav from '../linkWrapper';

const Header = () => {
    return(
        <nav>
        <div className="nav-wrapper">
          <ItensNav to="/" activeStyle={{fontWeight: "none"}} className="brand-logo">Logo</ItensNav>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><ItensNav to="/autores">Autores</ItensNav></li>
            <li><ItensNav to="/livros">Livros</ItensNav></li>
            <li><ItensNav to="/jocimar">Jocimar</ItensNav></li>
            <li><ItensNav to="/dadada">DADADA</ItensNav></li>
            <li><ItensNav to="/sobre">Sobre ItensNav gente</ItensNav></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;