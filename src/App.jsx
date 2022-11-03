import logo from './logo.svg';
import './App.css';
import Search from './componets/Search';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import People from "./views/People";
import Planets from "./views/Planets";
function App() {
  return (
    <>
    <Search />
    <Routes>
      <Route path='/people/:people_id' element={<People/>}/>
      <Route path='/planets/:planet_id' element={<Planets/>}/>
    </Routes>
    </>
  );
}

export default App;
