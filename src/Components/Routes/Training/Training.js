//Tests
import Header from '../../Header/Header.js'
import Footer from '../../Footer/Footer.js'
import TestTranslateWordOptions from '../../TranslateWordOptions/TestTranslateWordOptions.js'
import TestTranslateWordWrite from '../../TranslateWordWrite/TestTranslateWordWrite.js'

function Training(){
  return(

    <div className="d-flex h-100 text-center text-white bg-dark fill">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header/>
          <TestTranslateWordOptions />
          <TestTranslateWordWrite />
        <Footer />
      </div>
    </div>
  )
}

export default Training
