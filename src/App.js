
import './App.css';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Wash from './components/wash/Wash';

function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <Wash />
      <Services />
      <Testimonials />


    </div>
  );
}

export default App;
