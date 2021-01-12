import React from 'react';
import PropTypes from 'prop-types';

import {
  useStaticQuery,
  graphql,
} from 'gatsby';

import {
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
      <Navbar siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div>{children}</div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
