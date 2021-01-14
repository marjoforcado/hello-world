import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  Grid,
  Paper,
} from '@material-ui/core';

import { MFTypography } from '@themes/MF';

const ProjectList = () => {
  const classes = makeStyles(theme => ({
    title: {
      fontSize: '20px',
    },
    subheader: {
      fontSize: '15px',
    },
  }))();

  return (
    <>
      <Paper elevation={0}
            variant="outlined">
        <Box className="py-2 px-3">
          <MFTypography>Projects</MFTypography>
        </Box>
        <Grid direction="column"
              alignItems="stretch"
              container>
          <Grid item>
            <Card className="border-0"
                  elevation={0}>
              <CardActionArea disableRipple>
                <CardHeader title="CICD with AWS and Bitbucket Pipeline"
                            subheader="January 2021"
                            classes={{
                              title: classes.title,
                              subheader: classes.subheader,
                            }} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className="border-0"
                  elevation={0}>
              <CardActionArea disableRipple>
                <CardHeader title="CICD with AWS and Bitbucket Pipeline"
                            subheader="January 2021"
                            classes={{
                              title: classes.title,
                              subheader: classes.subheader,
                            }} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ProjectList;
