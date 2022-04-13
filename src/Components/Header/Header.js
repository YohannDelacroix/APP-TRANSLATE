import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Cover.css'

function Header(){
  return(
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">AppTranslate</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a className="nav-link active" aria-current="page" href="#">Learn</a>
          <a className="nav-link" href="#">Add</a>
          <a className="nav-link" href="#">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
