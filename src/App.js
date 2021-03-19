import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroContent from './Components/HeroContent';
import HeroForm from './Components/HeroForm';

function App() {
  return (
    <div>
      <div className="hero-section position-relative">
        <HeroContent />
        <HeroForm />
      </div>
    </div>
  );
}

export default App;
