import Header from '../../Header/Header.js'
import Footer from '../../Footer/Footer.js'
import TestAddForm from './TestAddForm.js'

/*
  The add component allows to add new vocabulary stuff into the database
*/

function Add(){
  return(
    <div className="d-flex h-100 text-center text-white bg-dark fill">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        <div className="d-flex my-3 text-start flex-column">
          <h5>The Add Functionnality</h5>
          <p>You need to learn some vocabulary ? but you don't know how to memorize it ? Fill in the form below and get it back to your training.</p>
          <TestAddForm />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Add
