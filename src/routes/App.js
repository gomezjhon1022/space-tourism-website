import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '../containers/Home/index';
import { Destination } from '../containers/Destination/index';
import { Crew } from '../containers/Crew/index';
import { Technology } from '../containers/Technology';
import { Layout } from '../components/Layout';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/space-tourism-website'>
        <Layout>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/destination" element={<Destination/>}></Route>
              <Route path="/crew" element={<Crew/>}></Route>
              <Route path="/technology" element={<Technology/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
