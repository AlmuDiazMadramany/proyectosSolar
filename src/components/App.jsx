import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import ServicesDetail from '../pages/ServicesDetail';
import '../styles/navbar.scss';
import '../styles/footer.scss';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicio/:id" element={<ServicesDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
