import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardActionArea,
  CardHeader,
  Grid,
  Paper,
} from '@material-ui/core';

import { MFTypography } from '@themes/MF';

const BlogList = () => {
  const classes = makeStyles(theme => ({
    title: {
      fontSize: '20px',
    },
    subheader: {
      fontSize: '15px',
    },
  }))();

  return (
    <Paper className="border"
           elevation={0}>
      {/* <MFTypography variant="h5">I wrote these</MFTypography> */}
      <Grid direction="column"
            alignItems="stretch"
            container>
        <Grid item>
          <Card className="border-0"
                elevation={0}>
            <CardActionArea>
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
            <CardActionArea>
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
  );
};

export default BlogList;
