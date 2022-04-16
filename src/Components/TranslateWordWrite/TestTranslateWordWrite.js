import 'bootstrap/dist/css/bootstrap.min.css';
import TranslateWordWrite from './TranslateWordWrite'

function TestTranslateWordWrite(){

  //The word the user must translate
  const word = {
    content: "Frau",
    id: 517
  }

  const theSolution = {
    content: "femme",
    id:879
  }

  return(
    <div className="border">

      <p className="m-5 border border-white">This is a front-end test component for TranslateWordWrite</p>
      <div>
        <TranslateWordWrite aWord={word} theSolution={theSolution}/>
      </div>
    </div>
  )
}

export default TestTranslateWordWrite
