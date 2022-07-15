import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './pages/Hello';
import InfoTable from './pages/InfoTable';

function App() {
  return <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      {/* <li><a href="/about">Test About</a></li> */}
      <li><Link to="/hello">Hello Page</Link></li>
      <li><Link to="/infoTable">Info Table</Link></li>
      {/* <li><a href="https://www.google.com">Google</a></li>
      <li><Link to="https://www.google.com">Test Google</Link></li> */}
    </ul>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />}>
        <Route path=":username" element={<About />}/>
      </Route> 
      <Route path="/contact" element={<Contact/>} />
      <Route path="/hello" element={<Hello />} />
      <Route path="/infoTable" element={<InfoTable />} />
      <Route path="*" element={<Error />}/>
    </Routes>
  </Router>
}

export default App;
