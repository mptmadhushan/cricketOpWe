import React from "react";
import Dashboard from "./routes/dash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import '../src/css/rootstyles.css';
import Nav from "./components/nav";
import Sidepanel from "./components/sidepanel";
import Teamselection from "./routes/teamselection";
import Winloss from "./routes/winloss";

function App() {
  return (
    <div className="App">


      <Nav />
      <Sidepanel />

      <BrowserRouter>
        <Routes>
          <Route index element={< Dashboard/>} />
          <Route path="Teamselection" element={<Teamselection />} />
          <Route path="Winloss" element={<Winloss />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
