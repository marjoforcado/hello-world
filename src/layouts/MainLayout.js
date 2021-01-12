import React from 'react';
import PropTypes from 'prop-types';

import {
  Navbar,
} from '@shared/components';

const MainLayout = ({children}) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
