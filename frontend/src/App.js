import './App.css';
import Navbar from './components/Navbar';
import AddBooks from './pages/AddBooks';
import Home from './pages/Home';
import Books from './pages/Books'; // Import Books component
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<AddBooks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
