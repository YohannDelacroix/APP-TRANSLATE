import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import '../../Cover.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
  return (
    <div className="d-flex h-100 text-center text-white bg-dark fill">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header/>
        <div className="">
          <h1>Welcome to AppTranslate</h1>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
