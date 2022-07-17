import React, { Component } from 'react';
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <Nav/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/contact" element={<Contact/>} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/work" element={<Work/>} />
            </Routes>
          </BrowserRouter>
        )
    }
}

export default App;
