import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const MFNavbar = ({children}) => <AppBar position="static">{children}</AppBar>;

MFNavbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MFNavbar;
