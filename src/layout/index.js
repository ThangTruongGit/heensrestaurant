import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/united-bootstrap.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
       query LayoutQuery {
         site {
           siteMetadata {
             title,
             menu {
               key
               title
               url
             }
           }
         }
       }
    `}
    render={({ site }) => (
      <Fragment>
        <Helmet
          defaultTitle={site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Heens Restaurant' },
            { name: 'keywords', content: 'heens, restaurant, website, menu, food, chinese' },
          ]}
        />
        <Header
          siteTitle={site.siteMetadata.title}
          siteMenu={site.siteMetadata.menu}
        />
        {children}
        <Footer />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
