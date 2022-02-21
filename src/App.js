import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Apropos from './pages/Apropos.jsx';
import Error from'./pages/Error.jsx';
import Rental from './pages/Rental.jsx';

function App() {
  return (
    <div>
         <Router>
           <Routes>
           <Route path="/" element={<Home />} />

           <Route path="/Rental" element={<Rental />} />
           <Route path=":id" element={<Rental />} />

               <Route path="/Apropos" element={ <Apropos />} />

              <Route path="error" element={<Error />} />
					<Route path="*" element={<Error />} />
          </Routes>
         </Router>
    </div>
  );
}

export default App;
