
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import './Cover.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Tests
import TestTranslateOptions from './Components/TestTranslateOptions/TestTranslateOptions.js'

function App() {

  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header/>
        
        <TestTranslateOptions />
        <Footer />
      </div>
    </div>

  );
}

export default App;
