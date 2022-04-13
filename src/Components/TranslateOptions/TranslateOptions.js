/*
  Component TranslateOptions
    The component shows a sentence to translate followed by possible choices
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Option from '../Option/Option.js'

function TranslateOptions({sentence, solutions}){

  return(
    <div className="p-2">
      <div className="text-start">
        <h4>Choisir la bonne traduction de  ...</h4>
        <p>&emsp; {sentence.content}</p>
      </div>
    <ul className="list-group">
      {
        solutions.map(
          (aSolution) => {
              return <Option key={aSolution.id} text={aSolution.content} id={aSolution.id} correct={aSolution.correct} />
          }
        )
      }
    </ul>
    </div>
  )
}

export default TranslateOptions
