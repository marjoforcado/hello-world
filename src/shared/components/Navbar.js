import React from 'react';
import { Link } from 'gatsby';

import { Typography } from '@material-ui/core';

import {
  MFAppBar,
} from '@themes/MF';

const Navbar = ({siteTitle}) => (
  <MFAppBar color="primary"
            position="static">
    <Typography variant="h6">
      <Link to="/">
        {siteTitle}
      </Link>
    </Typography>
  </MFAppBar>
);

export default Navbar;
