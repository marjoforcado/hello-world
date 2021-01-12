import React from 'react';
import { Link } from 'gatsby';

import { Typography } from '@material-ui/core';

import {
  MFNavbar,
} from '@themes/MF';

const Navbar = ({siteTitle}) => (
  <MFNavbar>
    <Typography variant="h6">
      <Link to="/">
        {siteTitle}
      </Link>
    </Typography>
  </MFNavbar>
);

export default Navbar;
