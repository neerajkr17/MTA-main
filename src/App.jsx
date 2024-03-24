import React from 'react';
import './App.css';
import Opening from "./components/Page/Opening";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Page/Update";
import Activitypage from "./components/Page/Activitypage";
import Dashboard from "./components/Page/Dashboard";
import Login from "./components/Login";
import Landing from './components/Page/Landing';

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />

              <Route path="/landing" element={<Landing/>} />

              <Route path="/merchant-addition" element={<Opening />} />
              <Route path="/merchant-update" element={<Update />} />

              <Route path="/merchant-activitypage" element={<Activitypage />} />
              <Route path="/merchant-dashboard" element={<Dashboard/>} />
              <Route path="/maker"/>

              <Route path="/account-status-report"/>
              <Route path="/commission-report"/>
              <Route path="/merchant-detail-report"/>
              <Route path="/real-time-report"/>
              <Route path="/recon-report"/>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
