/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChildrenDataPage from './pages/ChildrenDataPage';
import AddChildPage from './pages/AddChildPage';
import EditChildPage from './pages/EditChildPage';
import ChildrenDetailPage from './pages/ChildrenDetailPage';
import ParentsDataPage from './pages/ParentsDataPage';
import AddParentPage from './pages/AddParentPage';
import EditParentPage from './pages/EditParentPage';
import ParentDetailPage from './pages/ParentDetailPage';
import PosyanduDataPage from './pages/PosyanduDataPage';
import AddPosyanduPage from './pages/AddPosyanduPage';
import PosyanduEditPage from './pages/EditPosyanduPage';
import PosyanduDetailPage from './pages/PosyanduDetailPage';
import BidanDataPage from './pages/BidanDataPage';
import AddBidanPage from './pages/AddBidanPage';
import EditBidanPage from './pages/EditBidanPage';
import BidanDetailPage from './pages/BidanDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';

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
          <Route path="/children-data/add-child" element={<AddChildPage />} />
          <Route path="/children-data/:id/edit-child" element={<EditChildPage />} />
          <Route path="/children-data/:id" element={<ChildrenDetailPage />} />
          <Route path="/parents-data" element={<ParentsDataPage />} />
          <Route path="/parents-data/add-parent" element={<AddParentPage />} />
          <Route path="/parents-data/:id/edit-parent" element={<EditParentPage />} />
          <Route path="/parents-data/:id" element={<ParentDetailPage />} />
          <Route path="/posyandus-data" element={<PosyanduDataPage />} />
          <Route path="/posyandus-data/add-posyandu" element={<AddPosyanduPage />} />
          <Route path="/posyandus-data/:id/edit-posyandu" element={<PosyanduEditPage />} />
          <Route path="/posyandu-data/:id" element={<PosyanduDetailPage />} />
          <Route path="/bidans-data" element={<BidanDataPage />} />
          <Route path="/bidans-data/add-bidan" element={<AddBidanPage />} />
          <Route path="/bidans-data/:id/edit-bidan" element={<EditBidanPage />} />
          <Route path="/bidans-data/:id" element={<BidanDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
