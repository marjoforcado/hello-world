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
             position: 'absolute',
             right: 0,
             height: '100%',
           }}>
        <Navbar siteTitle={data.site.siteMetadata?.title || 'Title'} />
        <Container className="py-3">
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
