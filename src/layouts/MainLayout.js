import React from 'react';
import PropTypes from 'prop-types';

import {
  useStaticQuery,
  graphql,
} from 'gatsby';

import {
  Container,
  CssBaseline,
} from '@material-ui/core';

import {
  Navbar,
} from '@shared/components';

const MainLayout = (props) => {
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
      <Container>
        {children}
      </Container>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
