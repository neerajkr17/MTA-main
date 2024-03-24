import React from 'react';
import './App.css';
import Opening from "./components/Page/Opening";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Page/Update";
import Makercheckerstatus from "./components/Page/Makercheckerstatus";
import Dashboard from "./components/Page/Dashboard";
import Login from "./components/Login";
import Landing from './components/Page/Landing';
import Maker from './components/Page/Maker';
import Checker from './components/Page/Checker';
import Accountstatus from './components/Page/Reports/Accountstatus';
import Commission from './components/Page/Reports/Commission';
import Merchantdetail from './components/Page/Reports/Merchantdetail';
import Realtime from './components/Page/Reports/Realtime';
import Recon from './components/Page/Reports/Recon';

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />

              <Route path="/landing" element={<Landing/>} />

              <Route path="/merchant-addition" element={<Opening />} />
              <Route path="/merchant-update" element={<Update />} />

              <Route path="/maker" element={<Maker/>} />
              <Route path="/checker" element={<Checker/>}/>
              <Route path="/maker-checker-status" element={<Makercheckerstatus />} />
              <Route path="/maker-checker-dashboard" element={<Dashboard/>} />

              <Route path="/account-status-report" element={<Accountstatus/>} />
              <Route path="/commission-report" element={<Commission/>} />
              <Route path="/merchant-detail-report" element={<Merchantdetail/>} />
              <Route path="/real-time-report" element={<Realtime/>} />
              <Route path="/recon-report" element={<Recon/>} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
