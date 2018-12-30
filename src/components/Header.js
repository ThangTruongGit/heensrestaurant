import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteMenu }) => (
  <header className="container">
<div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="../" className="navbar-brand">Heens Restaurant</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="nav navbar-nav ml-auto">
            {siteMenu.map(item => (
              <li className="nav-item" key={item.key}>
                <Link
                  to={item.url}
                  className="nav-link"
                >
                  <span className={`glyphicon glyphicon-${item.icon}`} />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default Header;
