import logo from './logo.svg';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'
import './Cover.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <body className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        <main className="px-3">
          <h1>Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
          </p>
        </main>

        <Footer />
      </div>
    </body>

  );
}

export default App;
