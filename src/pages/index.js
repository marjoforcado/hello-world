import React from 'react';

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
    <ExperienceList />
    <ToolsList />
  </MainLayout>
);

export default IndexPage;
