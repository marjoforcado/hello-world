import React from 'react';

import MainLayout from '@layouts/MainLayout';

import {
  SEO,
} from '@shared/components';

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hello world!</h1>
  </MainLayout>
);

export default IndexPage;
