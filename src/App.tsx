// App.js or App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Dashboard = () => <div>Dashboard Content</div>;
const Jobs = () => <div>Jobs Content</div>;
const Employee = () => <div>Employee Content</div>;
const Income = () => <div>Income Content</div>;
const Production = () => <div>Production Content</div>;
const Transaction = () => <div>Transaction Content</div>;
const Invoices = () => <div>Invoices Content</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/jobs" element={<Layout><Jobs /></Layout>} />
        <Route path="/employee" element={<Layout><Employee /></Layout>} />
        <Route path="/income" element={<Layout><Income /></Layout>} />
        <Route path="/production" element={<Layout><Production /></Layout>} />
        <Route path="/transaction" element={<Layout><Transaction /></Layout>} />
        <Route path="/invoices" element={<Layout><Invoices /></Layout>} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
