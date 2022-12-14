import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import Form from './components/Form'
import Footer from './components/Footer';
import MostViewed from './components/MostViewed';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   
    
    <div>
      <Navbar />
      <HeroSection />
      <Form />
      <MostViewed />
      <Footer /> 
    </div>
    
    
  );
}

export default App;
