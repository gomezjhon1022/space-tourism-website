import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home/index';
import { Destination } from '../containers/Destination/index';
import { Crew } from '../containers/Crew/index';
import { Technology } from '../containers/Technology';
import './App.scss';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/destination" element={<Destination/>}></Route>
            <Route path="/crew" element={<Crew/>}></Route>
            <Route path="/technology" element={<Technology/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
