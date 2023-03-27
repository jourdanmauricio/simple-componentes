import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home/Home';
// import Spinner from '@/commons/Spinner/Spinner';
import Nav from '../commons/Nav/Nav';

const About = React.lazy(() => import('@/pages/About/About'));
const Components = React.lazy(() => import('@/pages/Components/Components'));
const Code = React.lazy(() => import('@/pages/Components/Code/Code'));
const Contact = React.lazy(() => import('@/pages/Contact/Contact'));

function AppRoutes() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/:component" element={<Components />}>
            <Route path="code" element={<Code />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default AppRoutes;
