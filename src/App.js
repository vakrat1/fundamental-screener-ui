// App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import GridPage from './GridPage';
import AppBarChart from './AppBarChart';
import Main from './main';

import CustomAppBar from './CustomAppBar';

import CustomMenu from './CustomMenu';  // Import the CustomMenu


// Create a Data Provider
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  // <Admin dataProvider={dataProvider} appBar={CustomAppBar}>
  // <Admin dataProvider={dataProvider}>
  <Admin dataProvider={dataProvider} menu={CustomMenu}>
    <Resource name="main" list={Main} />
    <Resource name="grid" list={GridPage} />
    <Resource name="charts" list={AppBarChart} />
  </Admin>
);

export default App;
