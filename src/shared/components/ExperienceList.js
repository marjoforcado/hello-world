import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  Chip,
  Grid,
} from '@material-ui/core';

import { MFTypography } from '@themes/MF';

const experiences = [
  {
    id: 1,
    title: 'FEU Intitute of Technology - Bachelors Degree',
    icon: 'fa-user-graduate',
    subtitle: 'June 2016',
    description: 'Received bachelors degree in Information Technology June 2016.',
  },
  {
    id: 2,
    title: 'FFUF Manila - Web Developer',
    icon: 'fa-briefcase',
    subtitle: 'June 2016 - July 2018',
    description: 'Received bachelors degree in Information Technology June 2016.',
  },
  {
    id: 2,
    title: 'HC Consumer Finance Philippines INC - Web Developer',
    icon: 'fa-briefcase',
    subtitle: 'July 2018 - Oct 2019',
    description: 'Received bachelors degree in Information Technology June 2016.',
    tags: [
      'PHP',
      'Laravel',
      'Vue',
    ],
  },
  {
    id: 3,
    title: 'Nisade Alpine Development - Software Engineer',
    icon: 'fa-briefcase',
    subtitle: 'Oct 2019 - Dec 2020',
    description: 'Received bachelors degree in Information Technology June 2016.',
    tags: [
      'AWS',
      'MySql',
      'PHP',
      'Laravel',
      'React',
    ],
  },
];

const ExperienceCard = experience => {
  const classes = makeStyles(theme => ({
    cardRoot: {
      width: '100%',
      maxWidth: '500px',
    },
  }))();

  console.log(experience);

  return (
    <Card className="my-2"
          classes={{
            root: classes.cardRoot,
          }}>
      <CardContent>
        <MFTypography variant="body2"
                      color="textSecondary">
          {experience.experience.title}
          &nbsp;
          <i className={`fas ${experience.experience.icon}`} />
        </MFTypography>
        <MFTypography className="mb-2"
                      variant="body2">
          {experience.experience.subtitle}
        </MFTypography>
        <MFTypography className="mb-2"
                      variant="body2">
          {experience.experience.description}
        </MFTypography>
        <Chip size="small"
              label="Graduation" />
        <Chip size="small"
              label="PHP" />
        <Chip size="small"
              label="MySQL" />
      </CardContent>
    </Card>
  );
};

const ExperienceList = () => {
  return experiences.map(experience => <ExperienceCard key={experience.id}
                                                       experience={experience} />);
};

export default ExperienceList;
