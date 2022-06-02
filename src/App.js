import Home from './pages/home';

import NavbarContent from './components/Navbar';
import FormDetails from './pages/form';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
<div>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarContent />}>
          <Route path="/home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

          
     <NavbarContent />
      <Home />
     {/* <FormDetails /> */}
    </div>


    // <Router>

    //   <div className="App">

    //     {/* <Switch> */}
    //     <Route exact path="/home">
    //       <NavbarContent />
    //       <Home />
    //     </Route>

    //     <Route path="/FormDetails">
    //       <NavbarContent />
    //       <FormDetails />
    //     </Route>

    //     {/* <Route path="/portfolio/:id">
    //         <Portfolio />
    //       </Route> */}

    //     {/* <Route path='*' exact={true} /> */}
    //     {/* </Switch> */}

    //   </div>

    // </Router>
  );
}

export default App;
