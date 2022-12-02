/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChildrenDataPage from './pages/ChildrenDataPage';
import ChildrenDetailPage from './pages/ChildrenDetailPage';
import ParentsDataPage from './pages/ParentsDataPage';
import ParentDetailPage from './pages/ParentDetailPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/children-data" element={<ChildrenDataPage />} />
          <Route path="/children-data/:id" element={<ChildrenDetailPage />} />
          <Route path="/parents-data" element={<ParentsDataPage />} />
          <Route path="/parents-data/:id" element={<ParentDetailPage />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
