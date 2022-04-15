/*
  Component TranslateOptions
    The component shows a sentence to translate followed by possible choices
*/
import 'bootstrap/dist/css/bootstrap.min.css'
import Option from '../Option/Option.js'
import { useState } from 'react'

function TranslateWordOptions({word, solutions}){
  const [idOption, setIdOption] = useState(-1)

  return(
    <div className="p-2">
      <div className="text-start">
        <h4>Choisir la bonne traduction de  ...</h4>
        <p>&emsp; {word.content}</p>
      </div>


    {idOption == -1 ?
    (<ul className="list-group">
      {
        solutions.map(
          (aSolution) => {
              return <Option key={aSolution.id} solutionBody={aSolution} idOption={idOption} setIdOption={setIdOption} />
          }
        )
      }
    </ul>)
    :  // The answer have been given
    (
          solutions.map(
            (aSolution) => {
              if(aSolution.id == idOption){
                  if(aSolution.correct === true){
                    return <div>
                            <h5>Correct</h5>
                            <p>{aSolution.content}</p>
                            <button className="m-2" onClick={ () => setIdOption(-1)}>Retour</button>
                          </div>
                  }
                  else{
                    return <div>
                            <h5>Incorrect</h5>
                            {
                              solutions.map( (aSolution) => {
                                if(aSolution.correct == true){
                                  return <div>
                                  Bonne réponse :<br />
                                  {aSolution.content}
                                  </div>
                                }
                              })
                            }
                            <button className="m-2" onClick={ () => setIdOption(-1)}>Retour</button>
                          </div>
                  }
              }
            }
          )
      )
      }



    </div>
  )
}

export default TranslateWordOptions
