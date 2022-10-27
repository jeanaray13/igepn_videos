import './App.css';
import React from 'react';
import AddVideo from './Views/AddVideo';
import Dashboard from './Views/Dashboard';
import UpdateVideo from './Views/UpdateVideo';
import Update from './Components/Update';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route exact path='video/new' element={<AddVideo/>}/>
        <Route exact path='video/:id' element={<UpdateVideo/>}/>
        <Route exact path='video/:id/edit' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;