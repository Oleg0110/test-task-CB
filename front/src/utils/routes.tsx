import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Article, Home } from '../layout';
import { ROUTES } from './constants';

const useRoutes = () => (
  <Routes>
    <Route path={`${ROUTES.article}/*`} element={<Article />}></Route>
    <Route path={ROUTES.home} element={<Home />}></Route>
    <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
  </Routes>
);

export default useRoutes;
