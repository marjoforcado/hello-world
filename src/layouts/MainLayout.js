import React from 'react';
import PropTypes from 'prop-types';

import {
  graphql,
  useStaticQuery,
} from 'gatsby';

import {
  Box,
  Container,
  CssBaseline,
  Grid,
} from '@material-ui/core';

import {
  Footer,
  Navbar,
} from '@shared/components';

const MainLayout = props => {
  const { children } = props;

  const sidebarWidth = 250;

  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <CssBaseline />
      <Navbar siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
