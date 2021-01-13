import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { AppBar } from '@material-ui/core';

const MFAppBar = props => {
  const {
    children,
    ...others
  } = props;

  const classes = makeStyles(theme => ({
    colorPrimary: {
      backgroundColor: process.env.APP_COLOR_PRIMARY,
    },
  }))();

  return <AppBar classes={{
                  colorPrimary: classes.colorPrimary,
                 }}
                 {...others}>{children}</AppBar>;
};

MFAppBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MFAppBar;
