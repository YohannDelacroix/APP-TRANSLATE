import {useState} from 'react'
import './flexGrow.css'
function TargetLanguage({listLanguages, display, setDisplay, results, setResults}){
  const [idGen, setIdGen] = useState(0) //Generate a new id for an input

  //Return the id of the last input field
  function getIdLastInput(){
    return results.targetWords[results.targetWords.length -1].id;
  }

  return(
    <div>
    {
      display.targetLanguage.display &&      //Display the TargetLanguage element only when the previous field is completed
      <div id="targetLanguageBlock">
      {/*BEGIN OF BLOCK TARGET LANGUAGE*/}

        {
          !display.targetLanguage.reduced ?         //Display when not reduced
          <div className="d-flex flex-column">
            <div className="d-flex flew-row justify-content-between align-items-center">
              Target language
              <button className="btn btn-dark" type="button" onClick={ () => {
                setDisplay(prevState => (
                  {
                    ...prevState,
                    targetLanguage:{...prevState.targetLanguage, reduced: true}
                  }
                ));
              }}
              >-</button>
            </div>

          {/* FORM */}
            <div className="d-flex m-3 justify-content-between">
              <div className="d-flex flex-column ">
              <select  className="align-self-start" defaultValue={results.targetLanguage} onChange={(e) => {
                  setDisplay(prevState => (
                    {
                      ...prevState,
                      targetLanguage: {...prevState.targetLanguage, displayInput: true}
                    }
                  ));

                  setResults(prevState => ({
                    ...prevState,
                    targetLanguage:e.target.value
                  }));
              }}>
                {listLanguages.map( (aLang) => (
                  <option key={aLang} value={aLang}>{aLang}</option>
                ))}
              </select>

              {display.targetLanguage.displayInput &&
              <button type="button" className="mt-3 btn btn-light"
                onClick={ e =>  {


                  setResults( prevState => ({
                    ...prevState,
                    targetWords: [...prevState.targetWords, {word:"", id:idGen+1}]
                  }))

                  setIdGen(prevId => (prevId+1))
                }}>Add</button>}
              </div>

              { //Display the input text when the source language is selected
                display.targetLanguage.displayInput && <div className="d-flex flex-column">
                {
                  results.targetWords.map( (element) => (
                    <div key={element.id} className="d-flex flex-row justify-content-end">

                    {/* Button to delete the input field */}
                    { element.id !== 0 && //Not displaying the button for the first input
                    <button type="button" className="btn btn-dark"
                      onClick={ e => {
                        let tempArray = [...results.targetWords];
                        let index = tempArray.indexOf(element);
                        tempArray.splice(index, 1);
                        setResults( prevState => ({
                          ...prevState,
                          targetWords:[...tempArray]
                        }));
                      }}>Remove</button>}


                    <input
                      className="align-self-center"
                      type='text'
                      name="sourceWord"
                      placeholder="Type a target word"
                      defaultValue={element.word}
                      onBlur={(e) => {
                        let tempArray = [...results.targetWords];
                        let tempElement = {...tempArray[element.id]};
                        tempElement.word = e.target.value;
                        tempElement.id = element.id;
                        let index = tempArray.indexOf(element);
                        tempArray[index] = tempElement;
                        setResults(prevState => ({
                          ...prevState,
                          targetWords: [...tempArray]
                        }))
                      }}
                    />






                    </div>
                  ))
                }

                </div>
              }
            </div>
          </div>
          :                                         //Display when reduced
          <div className="d-flex flex-row justify-content-between align-items-center">
            Target language
            <button className="btn btn-dark" type="button" onClick={ () => {
              setDisplay(prev => (
                {
                  ...prev,
                  targetLanguage: {...prev.targetLanguage,reduced: false}
                }
              ));
            }}>+</button>
          </div>
        }


      {/*END OF BLOCK TARGET LANGUAGE*/}
      </div>
    }
    </div>
  )
}

export default TargetLanguage;
