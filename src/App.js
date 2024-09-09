// App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import GridPage from './pages/GridPage';
import BarChart from './pages/AppBarChart';
import Main from './pages/main';

import CustomAppBar from './CustomAppBar';

import CustomMenu from './CustomMenu';  // Import the CustomMenu
import CustomMenu1 from './CustomMenu';

import Layout from './AppLayout';



// Create a Data Provider
const dataProvider = jsonServerProvider('http:127.0.0.1');

const App = () => (
  // <Admin dataProvider={dataProvider} appBar={CustomAppBar}>
  // <Admin dataProvider={dataProvider}>
  // <Admin dataProvider={dataProvider} menu={CustomMenu1}>
  //   <Resource name="main" list={Main} />
  //   <Resource name="grid" list={GridPage} />
  //   <Resource name="charts" list={AppBarChart} />
  // </Admin>

  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/data" element={<GridPage />} />
        <Route path="/charts" element={<BarChart />} />
      </Routes>
    </Layout>
  </Router>

);

export default App;
