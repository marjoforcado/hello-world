import React from 'react';

import { Grid, Paper } from '@material-ui/core';

import MainLayout from '@layouts/MainLayout';

import { MFTypography } from '@themes/MF';

import {
  BlogList,
  ExperienceList,
  SEO,
  ToolsList,
} from '@shared/components';

import displayImage from '@images/image-1.jpg';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <MFTypography variant="h3"
                  align="center">@Mrjfrcdo</MFTypography>
    <Grid spacing={3}
          container>
      <Grid xs={3}
            item>
        <Paper variant="outlined"
               elevation={0}>
          <img src={displayImage} />
        </Paper>
      </Grid>
      <Grid xs={5}
            item>
        <ExperienceList />
      </Grid>
      <Grid xs={4}
            item>
        <BlogList />
      </Grid>
    </Grid>
    <ToolsList />
  </MainLayout>
);

export default IndexPage;
