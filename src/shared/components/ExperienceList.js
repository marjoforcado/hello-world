import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
} from '@material-ui/core';

import { MFTypography } from '@themes/MF';

const experiences = [
  {
    id: 1,
    title: 'FEU Institute of Technology - Bachelors Degree',
    icon: 'fa-user-graduate',
    subtitle: 'June 2016',
    description: 'Received bachelors degree in Information Technology.',
    tags: [
      'Graduation',
      'Degree Holder',
      'Education',
    ],
  },
  {
    id: 2,
    title: 'FFUF Manila - Web Developer',
    icon: 'fa-briefcase',
    subtitle: 'Jun 2016 - Jul 2018',
    description: `
      Worked in collaboration as a web developer,
      using Angular and PHP for developing web applications,
      converting web designs from Zeplin to HTML/CSS/Javascript.
    `,
    tags: [
      'PHP',
      'Angular',
      'Javascript',
      'SASS',
    ],
  },
  {
    id: 3,
    title: 'HC Consumer Finance Philippines Inc. - Web Developer',
    icon: 'fa-briefcase',
    subtitle: 'Jul 2018 - Oct 2019',
    description: `
      Worked in collaboration with an agile team, developed iternal tools using
      Vuejs and Laravel, discussing UI/UX ideas to make applications accessible for
      stakeholders.
    `,
    tags: [
      'Vue',
      'Laravel',
      'Agile Development',
    ],
  },
  {
    id: 4,
    title: 'Nisade Alpine Development - Software Engineer',
    icon: 'fa-briefcase',
    subtitle: 'Oct 2019 - Dec 2020',
    description: `
      Worked as a solo fullstack software engineer, developing the company's cloud architecture
      using AWS, API Development using Laravel and UI/UX using React.
    `,
    tags: [
      'AWS',
      'MySQL',
      'Laravel',
      'React',
      'Figma',
    ],
  },
];

const ExperienceCard = props => {
  const { experience } = props;

  const classes = makeStyles(theme => ({
    cardRoot: {
      width: '100%',
    },
  }))();

  return (
    <Card variant="outlined"
          elevation={0}
          classes={{
            root: classes.cardRoot,
          }}>
      <CardContent>
        <MFTypography variant="body2"
                      color="textSecondary">
          {experience.title} <i className={`fas ${experience.icon}`} />
        </MFTypography>
        <MFTypography className="mb-2"
                      variant="body2">
          {experience.subtitle}
        </MFTypography>
        <MFTypography className="mb-2"
                      variant="body2">
          {experience.description}
        </MFTypography>
        <Grid spacing={1}
              container>
          {
            experience.tags?.map((tag, index) => (
              <Grid key={index}
                    item>
                <Chip size="small"
                      color="primary"
                      label={tag} />
              </Grid>
            ))
          }
        </Grid>
      </CardContent>
      <CardActions className="text-center">
        <Button size="small"
                color="primary"
                variant="text"
                fullWidth
                disableRipple>Learn More</Button>
      </CardActions>
    </Card>
  );
};

const ExperienceList = () => {
  return (
    <Grid direction="column"
          alignItems="stretch"
          spacing={2}
          container>
      {
        experiences.reverse()
                   .map(experience => (
                     <Grid key={experience.id}
                           item>
                      <ExperienceCard experience={experience} />
                     </Grid>
                   ))
      }
    </Grid>
  );
};

export default ExperienceList;
