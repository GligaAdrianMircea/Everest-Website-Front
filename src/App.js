import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SubNavbar from './Components/SubNavbar';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import About from './Components/About';
import Sing from "./Components/Sing";
import Log from './Components/Log';
import Contact from "./Components/Contact";
import SellProduct from "./Components/SellProduct"
import { useGetAuthContex } from './hooks/useGetAuthContex';
import { Navigate } from "react-router-dom";
import AllProducts from './Components/AllProducts';
import Jucarii from './Components/Jucarii';
import Natura from './Components/Natura';
import Papuci from './Components/Papuci';
import Technologie from './Components/Tehnologie';
import Ceasuri from './Components/Ceasuri';
import PentruAcasa from './Components/PentruAcasa';
import Imbracaminte from './Components/Imbracaminte';
import Arta from './Components/Arta';
import Altele from './Components/Altele';
import BoughtByMe from './Components/BoughtByMe';
import CheckOutSucces from './Components/CheckOutSucces';
import CheckOutCancel from './Components/CheckOutCancel';
import NewSellProd from './Components/newSellProd';
import NotFound from './Components/NotFound';
import SuccesSellProd from './Components/SuccesSellProd';
import NotLogin from './Components/NotLogin';

function App() {
  const { user } = useGetAuthContex()
  return (
    <div className="App">
      <Router>
      {user && <Navbar />}
      {user && <SubNavbar />} 
        <Routes>
          <Route path='/' element= {<Categories/>} /> 
          <Route path='/Sing' element={!user ? <Sing /> : <Navigate to='/'/>}/>
          <Route path='/About' element={user ? <About /> : <Navigate to='/Log'/>} />
          <Route path='/Log' element={!user ? <Log /> : <Navigate to='/' />} />
          <Route path='/Contact' element={user ? <Contact /> : <NotLogin/>} /> 
          <Route path='/sell-product' element={user ? <SellProduct /> : <NotLogin />} /> 
          <Route path='/allProducts' element={user ? <AllProducts /> : <NotLogin/>} />
          <Route path='/Jucarii' element={user ? <Jucarii /> : <NotLogin />} />
          <Route path='/Natura' element={user ? <Natura /> : <NotLogin/>} />
          <Route path='/Papuci' element={user ? <Papuci /> : <NotLogin /> } />
          <Route path='/Tehnologie' element={user ? <Technologie /> : <NotLogin />} />
          <Route path='/Ceasuri' element={user ? <Ceasuri /> : <NotLogin/>} />
          <Route path='/PentruAcasa' element={user ? <PentruAcasa /> : <NotLogin/>} />
          <Route path='/Imbracaminte' element={user ? <Imbracaminte /> : <NotLogin/>} />
          <Route path='/Arta' element={user ? <Arta /> : <NotLogin />} />
          <Route path='/Altele' element={user ? <Altele /> :  <NotLogin />} />
          <Route path='/CumparateDeMine' element={user ? <BoughtByMe /> : <NotLogin/>} />
          <Route path='/succes' element={<CheckOutSucces />}/>
          <Route path='/cancel' element={<CheckOutCancel />} />
          <Route path='/VindeProdus' element={user ? <NewSellProd/> : <NotLogin />} /> 
          <Route path='/succes-sell-product' element={<SuccesSellProd />}/>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;