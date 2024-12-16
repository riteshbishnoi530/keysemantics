import './App.css';
import Hero from './components/Hero';
import HeadlessSearch from './components/HeadlessSearch';
import KeySemanticsWork from './components/KeySemanticsWork';
import CustomInput from './components/CustomInput';
import Footer from './components/Footer';
import Faq from './components/Faq';

function App() {
  return (
    <div>
      <Hero/>
      <KeySemanticsWork/>
      <Faq/>
      <HeadlessSearch/>
      <CustomInput/>
      <Footer/>
    </div>
  );
}

export default App;
