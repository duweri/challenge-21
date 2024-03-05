import './App.css';
import { Outlet } from 'react-router-dom';
// Create an Apollo Provider to make every request work with the Apollo server.


import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
