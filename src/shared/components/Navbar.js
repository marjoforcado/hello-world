import React from 'react';
import { Link } from 'gatsby';

import {
  Container,
  Typography,
} from '@material-ui/core';

import {
  MFAppBar,
} from '@themes/MF';

const Navbar = ({siteTitle}) => (
  <MFAppBar color="primary"
            position="sticky">
    <Container>
      <Typography variant="h6">
        <Link to="/">
          {siteTitle}
        </Link>
      </Typography>
    </Container>
  </MFAppBar>
);

export default Navbar;
