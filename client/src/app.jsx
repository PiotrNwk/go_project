import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Users from './pages/Users.jsx'; // Remove the .\src\ prefix

import './assets/styles/input.css';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 p-4">
          <AppRoutes />
        </main>

        <Footer companyName="Piotr Nowak" />
      </div>
    </Router>
  );
}

export default App;
