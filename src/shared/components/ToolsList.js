import React from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

import {
  Rating,
} from '@material-ui/lab';

import {
  Box,
} from '@material-ui/core';

import {
  MFTypography,
} from '@themes/MF';

const tools = [
  {
    id: 1,
    icon: 'fab fa-html5',
    color: '#f06529',
    title: 'html5',
    rating: 5,
  },
  {
    id: 2,
    icon: 'fab fa-sass',
    color: '#cc6699',
    title: 'sass',
    rating: 4,
  },
  {
    id: 3,
    icon: 'fab fa-js-square',
    color: '#f0db4f',
    title: 'javascript',
    rating: 5,
  },
  {
    id: 4,
    icon: 'fab fa-aws',
    color: '#FF9900',
    title: 'AWS',
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
    id: 6,
    icon: 'fab fa-react',
    color: '#61DBFB',
    title: 'react',
    rating: 5,
  },
  {
    id: 7,
    icon: 'fab fa-angular',
    color: '#B52E31',
    title: 'angular',
    rating: 2,
  },
  {
    id: 8,
    icon: 'fab fa-vuejs',
    color: '#41B883',
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
    color: '#2c3e50',
    rating: 3,
  },
  {
    id: 11,
    icon: 'fab fa-github',
    title: 'github',
    color: '#F1502F',
    rating: 5,
  },
  {
    id: 12,
    icon: 'fab fa-node-js',
    title: 'nodejs',
    color: '#44883e',
    rating: 3,
  },
];

const ToolCard = props => {
  const { tool } = props;

  const classes = makeStyles(theme => ({
    boxRoot: {
      display: 'inline-block',
      textAlign: 'center',
    },
    root: {
      fontSize: '55px',
      color: tool.color || theme.palette.text.secondary,
    },
  }))();

  return (
    <Box className={classes.boxRoot}>
      <i className={classNames(classes.root, tool.icon)} />
      <MFTypography variant="subtitle2"
                    className="text-uppercase">{tool.title}</MFTypography>
      <Box className="d-block">
        <Rating name="read-only"
                size="small"
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
      <MFTypography variant="h5">Package.json</MFTypography>
      {
        tools.map(tool => <ToolCard key={tool.id} 
                                    tool={tool} />)
      }
    </>
  );
};

export default ToolsList;
