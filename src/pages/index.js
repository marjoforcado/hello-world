import React from 'react';

import {
  Box,
  Grid,
  Link,
  Paper,
} from '@material-ui/core';

import MainLayout from '@layouts/MainLayout';

import { MFTypography } from '@themes/MF';

import {
  BlogList,
  ExperienceList,
  ProjectList,
  SEO,
  ToolsList,
} from '@shared/components';

import displayImage from '@images/image-1.jpg';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    {/* <MFTypography variant="h3"
                  align="center">@Mrjfrcdo</MFTypography> */}
    <Grid spacing={3}
          container>
      <Grid xs={3}
            item>
        <Paper variant="outlined"
               elevation={0}>
          <img className="mb-0"
               src={displayImage} />
          <Box className="p-3">
            <MFTypography variant="subtitle2">
              Responsible, career driven with a strong personality, 
              loves to express ideas and opinions especially when working with a team. 
              Can work with minimal or no supervision.
            </MFTypography>
          </Box>
        </Paper>
        <br />
        <Paper variant="outlined"
               className="p-3"
               elevation={0}>
          <MFTypography>
            77-B Magat Salamat St., Brgy. Marilag, Proj. 4, Quezon City,
            Philippines, 1109
          </MFTypography>
          <hr />
          <MFTypography>
            (+63) 9992 099 074
          </MFTypography>
          <Link href="mailto:marjoforcado@gmail.com">
            marjoforcado@gmail.com
          </Link>
          <br />
          <Link href="https://linkedin.com/in/marjoforcado">
            linkedin.com/in/marjoforcado
          </Link>
          <br />
          <Link href="https://github.com/marjoforcado">
            github.com/marjoforcado
          </Link>
          <hr />
          <MFTypography>
            b.s. information technology
          </MFTypography>
          <MFTypography>
            feu institute of technology
          </MFTypography>
          <MFTypography>
            2012 - 2016
          </MFTypography>
        </Paper>
      </Grid>
      <Grid xs={5}
            item>
        <ExperienceList />
      </Grid>
      <Grid xs={4}
            item>
        <BlogList />
        <br />
        <ProjectList />
      </Grid>
    </Grid>
    <br />
    <ToolsList />
  </MainLayout>
);

export default IndexPage;
