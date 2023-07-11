import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Launchpad from './components/Launchpad';

function App() {
  
  return (
  
   <BrowserRouter>
   <SignIn/>
   <Routes>
   <Route exact path='/navbar' element={<Navbar/>} />
   </Routes>
   </BrowserRouter>
   
    
  );
}

export default App;
