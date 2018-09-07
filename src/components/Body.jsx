import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import data from '../mocks/sampleData';

const Body = () => (
  <div className="body">
    <Sidebar />
    <Content data={data} />
  </div>
);

export default Body;  