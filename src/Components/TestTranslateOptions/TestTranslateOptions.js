import 'bootstrap/dist/css/bootstrap.min.css';
import TranslateOptions from '../TranslateOptions/TranslateOptions.js'

function TestTranslateOptions(){
  //Define a model of the objects and its parameters,

  //The sentence or word the user must translate
  const aSentence = {
    content: "Ich bin ein Mann",
    translation: "Je suis un homme",
    id: 516
  }

  //The solution expected
  const theSolution = {
    content: "Je suis un homme",
    translation: "Ich bin ein Mann",
    correct: true,
    id: 123
  }

  //A first bad solution
  const badSolution1 = {
    content: "Je ne sais pas",
    translation: "Ich weiss nicht",
    correct: false,
    id: 94
  }

  //A second bad solution
  const badSolution2 = {
    content: "Un nouvel oeuf",
    translation: "Ein neu Ei",
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

      <p className="m-5 border border-warning">Ceci est un composant de test pour TranslateOptions</p>
      <div>
        <TranslateOptions sentence={aSentence} solutions={solutionsList}/>
      </div>
    </div>
  )
}

export default TestTranslateOptions
