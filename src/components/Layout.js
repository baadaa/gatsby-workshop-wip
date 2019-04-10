import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import 'normalize.css';
import './styles/global.css';
import Nav from './Nav';
import Footer from './Footer';
import LayoutStyles from './styles/LayoutStyles';

export default function Layout({ children }) {
  // Static query in Gatsby, which can be used in any component
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <LayoutStyles>
      <Helmet>
        {/* Helmet can be placed ANYWHERE in an app.
        When/if there's a duplicate, the latter one wins.  */}
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <h1>{data.site.siteMetadata.title}</h1>
      <Nav />
      {children}
      <Footer />
    </LayoutStyles>
  );
}
