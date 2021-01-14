import React from 'react';

import {
  Container,
} from '@material-ui/core';

import {
  MFAppBar,
} from '@themes/MF';

const Footer = () => {
  return (
    <MFAppBar color="primary"
              position="relative">
      <Container>
        <p>Foo bar</p>
      </Container>
    </MFAppBar>
  );
};

export default Footer;
