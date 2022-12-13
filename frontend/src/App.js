import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import Form from './components/Form'
import Footer from './components/Footer';
import MostViewed from './components/MostViewed';
import ModalLogin from './components/ModalLogin';

function App() {
  return (
    
    <div>
      <Navbar />
      <HeroSection />
      <Form />
      <MostViewed />
      <Footer />
      {/* <ModalLogin /> */}
      
    </div>
    
    
  );
}

export default App;
