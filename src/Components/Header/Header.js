import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Cover.css'
import {Link} from 'react-router-dom'
import './Header.css'

function Header(){
  return(
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0"><Link className="mainPage" to="/">Vocamax</Link></h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <Link className="nav-link" aria-current="page" to="/Training">Training</Link>
          <Link className="nav-link" to="/Add">Add</Link>
          <Link className="nav-link" to="/About">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
