import React from 'react';
import PropTypes from 'prop-types';

import {
  graphql,
  useStaticQuery,
} from 'gatsby';

import {
  Container,
  CssBaseline,
} from '@material-ui/core';

import {
  Footer,
  Navbar,
} from '@shared/components';

const MainLayout = props => {
  const { children } = props;

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
      <Container className="py-5">
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
