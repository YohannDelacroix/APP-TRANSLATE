import 'bootstrap/dist/css/bootstrap.min.css';
import TranslateWordOptions from './TranslateWordOptions.js'

function TestTranslateWordOptions(){
  //Define a model of the objects and its parameters,

  //The word the user must translate
  const aWord = {
    content: "Mann",
    translation: "Man",
    id: 516
  }

  //The solution expected
  const theSolution = {
    content: "homme",
    correct: true,
    id: 123
  }

  //A first bad solution
  const badSolution1 = {
    content: "bulle",
    correct: false,
    id: 94
  }

  //A second bad solution
  const badSolution2 = {
    content: "oeuf",
    correct: false,
    id: 46
  }

  //The list of solution showed to the user
  const solutionsList = [
    theSolution,
    badSolution1,
    badSolution2
  ]


  return(
    <div className="border">

      <p className="m-5 border border-white">This is a front-end test component for TranslateWordOptions</p>
      <div>
        <TranslateWordOptions word={aWord} solutions={solutionsList}/>
      </div>
    </div>
  )
}

export default TestTranslateWordOptions
