import React from 'react';
import MainLayout from '../src/web/layout/MainLayout/';
import Dropdown from '../src/web/components/Dropdown';

const content = <div>Content of Dropdown</div>;

const Index = () => (
  <MainLayout title="No Name">
    <p>Hello world !</p>
    <Dropdown content={content}>Dropdown</Dropdown>
  </MainLayout>
);

export default Index;
