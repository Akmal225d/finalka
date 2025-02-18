import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
