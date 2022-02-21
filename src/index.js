import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/style.css';
import TopNav from './components/TopNav';
import Apropos from './pages/Apropos.jsx';
import Accueil from './pages/Accueil';

ReactDOM.render(
  <React.StrictMode>
    <Router>
     <TopNav />
       <Route path="/Accueil">
         <Accueil />
       </Route>

        <Route path="/Apropos">
           <Apropos />
        </Route>

        <Route>
          <Error />
        </Route>
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);
