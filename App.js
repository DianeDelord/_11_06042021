import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Apropos from './pages/Apropos.jsx';
import Error from'./pages/Error.jsx';
import Rental from './pages/Rental.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
         <Router>
           <Header />
           <Routes>
           <Route exact path="/" element={<Home />} />

           <Route path="/apropos" element={ <Apropos />} />

           <Route path="/rental" element={<Rental />} >
              <Route path=":id" element={<Rental />} />
           </Route>

              <Route path="/error" element={<Error />} />
					<Route path="*" element={<Error />} />
          </Routes>

          <Footer />

         </Router>
  );
}

export default App;
