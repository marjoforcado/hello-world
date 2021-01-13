import React from 'react';

import {
  Card,
  CardContent,
} from '@material-ui/core';

import MainLayout from '@layouts/MainLayout';

import {
  MFTypography,
} from '@themes/MF';

import {
  SEO,
} from '@shared/components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <MFTypography variant="h3"
                align="center">@Mrjfrcdo</MFTypography>
    <MFTypography variant="h5">Experiences</MFTypography>
    <Card>
      <CardContent>
        <MFTypography variant="body"
                    color="primary"
                    component="p">
          Lorem ipsum dolor sith ameth
        </MFTypography>
      </CardContent>
    </Card>
  </MainLayout>
);

export default IndexPage;
