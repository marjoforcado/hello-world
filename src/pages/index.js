import React from 'react';

import MainLayout from '@layouts/MainLayout';

import { MFTypography } from '@themes/MF';

import {
  ExperienceList,
  SEO,
} from '@shared/components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <MFTypography variant="h3"
                  align="center">@Mrjfrcdo</MFTypography>
    <MFTypography variant="h5">Experiences</MFTypography>
    <ExperienceList />
  </MainLayout>
);

export default IndexPage;
