import { Route, Routes } from 'react-router';
import React, { lazy, Suspense, useEffect } from 'react';
import { HomePage } from 'pages/home/homepage';
import { ContactsPage } from 'pages/contacts/contactspage';
import { AboutPage } from 'pages/about/aboutpage';
import { ExhibionPage } from 'pages/exhibition/exhibitionpage';
import { WorksPage } from 'pages/works/workspage';

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/exhibition" element={<ExhibionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
};
