/*
  Component TranslateWordWrite
    The user see a word on screen and must fill the text area with the right translation
*/
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'

function TranslateWordWrite({aWord, theSolution}){
  const [textAreaValue, setTextAreaValue] = useState("Type the translation here")
  const [answerGiven, setAnswerGiven] = useState(false)
  const [answerCorrect, setAnswerCorrect] = useState(false)


  //Event when the answer is submitted
  function handleSubmit(e){
    e.preventDefault();
    const answer = e.target['inputTranslation'].value;
    setAnswerGiven(true);

    setAnswerCorrect(isTheAnswerCorrect(answer))
  }

  //Check if the answer given is correct
    //  Delete the useless characters '.' ',' '?' '!'
    //  Format the chain to lowerCase
    //  Ignore the potential spaces , tab, return
  function isTheAnswerCorrect(answer){
    console.log(answer)

    //Remove all the useless characters
    let newWord = answer.replace(/^\s+|\s+$|[.,?\/#!$%\^&\*;:{}=\_`~()]/g, '')
    //Remove spaces


    if(newWord === theSolution.content) return true
    else return false
  }


  return(
    <div className="p-2">

      <div className="text-start">
        <h4>Choose the right translation of ...</h4>
        <p>&emsp; {aWord.content}</p>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex flex-column">
            <textarea type='text' name='inputTranslation' placeholder="Type the translation here" />
            <button type='submit'>Validate</button>
            {//<button type='submit' disabled={answerGiven}>Valider</button> //Disable the validation after the answer is given
            }
        </div>
      </form>

      {answerGiven ?
        <div className="p-2">
        {
          answerCorrect ?
                <div>
                  <h5>Good answer</h5>
                </div>
          :
                <div>
                  <h5>Bad answer </h5>
                  The correct translate is <span>{theSolution.content}</span>
                </div>
        }
        </div>
        : null
      }

    </div>
  )
}

export default TranslateWordWrite
