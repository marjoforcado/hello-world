import React from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

import { Rating } from '@material-ui/lab';

import {
  Box,
  Grid,
} from '@material-ui/core';

import { MFTypography } from '@themes/MF';

const tools = [
  {
    id: 1,
    icon: 'fab fa-html5',
    color: '#f06529',
    title: 'html5',
    rating: 5,
  },
  {
    id: 3,
    icon: 'fab fa-js-square',
    color: '#f0db4f',
    title: 'javascript',
    rating: 5,
  },
  {
    id: 6,
    icon: 'fab fa-react',
    color: '#61dbfb',
    title: 'react',
    rating: 5,
  },
  {
    id: 11,
    icon: 'fab fa-github',
    title: 'github',
    color: '#f1502f',
    rating: 5,
  },
  {
    id: 14,
    icon: 'fab fa-bootstrap',
    title: 'bootstrap',
    color: '#602c50',
    rating: 5,
  },
  {
    id: 2,
    icon: 'fab fa-sass',
    color: '#cc6699',
    title: 'sass',
    rating: 5,
  },
  {
    id: 13,
    icon: 'fab fa-laravel',
    title: 'laravel',
    color: '#fb503b',
    rating: 4,
  },
  {
    id: 8,
    icon: 'fab fa-vuejs',
    color: '#41b883',
    title: 'vue',
    rating: 3,
  },
  {
    id: 9,
    icon: 'fab fa-figma',
    title: 'figma',
    color: '#2c3e50',
    rating: 3,
  },
  {
    id: 10,
    icon: 'fas fa-database',
    title: 'mysql',
    color: '#3c3e50',
    rating: 3,
  },
  {
    id: 12,
    icon: 'fab fa-node-js',
    title: 'nodejs',
    color: '#44883e',
    rating: 3,
  },
  {
    id: 4,
    icon: 'fab fa-aws',
    color: '#ff9900',
    title: 'aws',
    rating: 2,
  },
  {
    id: 5,
    icon: 'fab fa-docker',
    color: '#0db7ed',
    title: 'docker',
    rating: 2,
  },
  {
    id: 7,
    icon: 'fab fa-angular',
    color: '#b52e31',
    title: 'angular',
    rating: 2,
  },
];

const ToolCard = props => {
  const { tool } = props;

  const classes = makeStyles(theme => ({
    root: {
      display: 'inline-block',
      textAlign: 'center',
    },
    iconRoot: {
      fontSize: '55px',
      color: tool.color || theme.palette.text.secondary,
    },
  }))();

  return (
    <Box className={classes.root}>
      <i className={classNames(classes.iconRoot, tool.icon)} />
      <MFTypography variant="subtitle2"
                    className="text-uppercase">{tool.title}</MFTypography>
      <Box className="d-block">
        <Rating size="small"
                defaultValue={1}
                value={tool.rating}
                readOnly />
      </Box>
    </Box>
  );
};

const ToolsList = () => {
  return (
    <>
      <MFTypography align="center"
                    className="mb-3"
                    variant="h5">My Packages</MFTypography>
      <Grid justify="center"
            spacing={2}
            container>
        {
          tools.map(tool => (
            <Grid key={tool.id}
                  item>
              <ToolCard tool={tool} />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
};

export default ToolsList;
