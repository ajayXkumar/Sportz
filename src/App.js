import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './screens/home';
import Nav from './screens/navbar';
import Pubg from './screens/Pubg';
import Csgo from './screens/Csgo';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pubg" element={<Pubg/>}/> 
          <Route path="/csgo" element={<Csgo/>}/> 
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
