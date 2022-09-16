import React  from 'react';
import Navbar from "./components/Navbar";
import Main from "./pages/main";
import AddJurnal from "./pages/AddJurnal";
import UpdateJurnal from "./pages/UpdateJurnal";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                      <Routes>
                          <Route path="/" exact element={<Main />}></Route>
                      </Routes>
                      <Routes>
                          <Route path="/add" element={<AddJurnal/>}></Route>
                      </Routes>
                      <Routes>
                          <Route path="/update/:id" element={<UpdateJurnal/>}></Route>
                      </Routes>
                  </div>
              </div>
          </div>

      </BrowserRouter>
  );
}

export default App;
