import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="font-sans text-text antialiased scroll-smooth flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
