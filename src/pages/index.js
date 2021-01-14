import React from 'react';

import {
  Grid,
} from '@material-ui/core';

import MainLayout from '@layouts/MainLayout';

import { MFTypography } from '@themes/MF';

import {
  ExperienceList,
  SEO,
  ToolsList,
} from '@shared/components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <MFTypography variant="h3"
                  align="center">@Mrjfrcdo</MFTypography>
    <Grid spacing={3}
          container>
      <Grid xs={9}
            item>
        <ExperienceList />
      </Grid>
      <Grid xs={3}>
        <p>lsadasdsad</p>
      </Grid>
    </Grid>
    <ToolsList />
  </MainLayout>
);

export default IndexPage;
