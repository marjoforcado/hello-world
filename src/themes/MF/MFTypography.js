import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const MFTypography = props => {
  const {
    children,
    ...others
  } = props;

  const classes = makeStyles(theme => ({
    colorPrimary: {
      color: process.env.APP_COLOR_PRIMARY,
    },
  }))();

  return <Typography classes={{
                       colorPrimary: classes.colorPrimary,
                     }}
                     {...others}>{children}</Typography>;
};

MFTypography.propTypes = {
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]),
};

export default MFTypography;
