import React from 'react';
import PropTypes from 'prop-types';

import {
  useStaticQuery,
  graphql,
} from 'gatsby';

import {
  Box,
  Container,
  CssBaseline,
} from '@material-ui/core';

import {
  Navbar,
} from '@shared/components';

const MainLayout = (props) => {
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
      <Box style={{
          position: 'fixed',
          height: '100%',
          backgroundColor: 'red',
          width: `${sidebarWidth}px`,
          top: 0,
          left: 0,
        }}>
        Test
      </Box>
      <Box style={{
             width: `calc(100% - ${sidebarWidth}px)`,
             position: 'fixed',
             right: 0,
           }}>
        <Navbar siteTitle={data.site.siteMetadata?.title || 'Title'} />
        <Container>
          {children}
        </Container>
      </Box>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
