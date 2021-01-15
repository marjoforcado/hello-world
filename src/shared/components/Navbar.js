import React from 'react';
import { Link } from 'gatsby';

import {
  Box,
  Button,
  Container,
  Typography,
} from '@material-ui/core';

import {
  MFAppBar,
} from '@themes/MF';

const Navbar = ({siteTitle}) => (
  <MFAppBar color="primary"
            position="sticky">
    <Container className="d-flex">
      <Typography variant="h6">
        <Link to="/">
          {siteTitle}
        </Link>
      </Typography>
      <Box style={{
        flexGrow: 1,
      }} />
      <Button type="text">
        Home
      </Button>
      <Button type="text">
        About
      </Button>
      <Button type="text">
        Contact Me
      </Button>
    </Container>
  </MFAppBar>
);

export default Navbar;
