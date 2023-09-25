import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home';
import { Destination } from '../containers/Destination';

import './App.scss';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/destination" element={<Destination/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
