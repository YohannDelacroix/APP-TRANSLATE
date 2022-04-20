import {useState} from 'react'
import './flexGrow.css'
function TargetLanguage({listLanguages, display, setDisplay, results, setResults}){
  const [idGen, setIdGen] = useState(0) //Generate a new id for an input field

  /* handleReduceBlock
    EventType : Click on button "-"
    Parameters : boolean
      Hide or show the Target Language block on screen
  */
  const handleReduceBlock = (reduce) => (e) => {
    setDisplay(prevState => (
      {
        ...prevState,
        targetLanguage:{...prevState.targetLanguage, reduced: reduce}
      }
    ));
  };

  /*
    handleSelectChanged
      EventType : Select value changed
      Effects :
        1. Display the second part of the form
        2. Memorize the target language
  */
  const handleSelectChanged = (e) => {
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
  };

  /*
    handleAddInput
      EventType : Click on the button "Add"
      Effects : Add another input field on screen
  */
  const handleAddInput = (e) => {
    setResults( prevState => ({
      ...prevState,
      targetWords: [...prevState.targetWords, {word:"", id:idGen+1}]
    }))
    //Set a new id for the next input fields
    setIdGen(prevId => (prevId+1))
  };


  /*
    handleRemoveInput
      Parameters : element - an element of the array results.targetWords
      EventType : Click on a button "Remove"
      Effects : Remove a target word and the input field associated
  */
  const handleRemoveInput = (element) => (e) => {
    let tempArray = [...results.targetWords];
    let index = tempArray.indexOf(element);
    tempArray.splice(index, 1);
    setResults( prevState => ({
      ...prevState,
      targetWords:[...tempArray]
    }));
  };


  /*
    handleEditInput
    EventType : The focus is out of the input field
    Effects : Memorize the target(s) word(s)
  */
  const handleEditInput = (element) => (e) => {
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
  };

  /*
    handleNextStep
      EventType : Click on the button "next"
      Effects : Display the next step of the form "Context"
  */
  const handleNextStep = (e) => {
    console.log()
    setDisplay( prevDisplay => ({
      ...prevDisplay,
      context:{...prevDisplay.context, display: true}
    }));
  };

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
              <button className="btn btn-dark" type="button" onClick={handleReduceBlock(true)}>-</button>
            </div>

          {/* FORM */}
            <div className="d-flex m-3 justify-content-between">
              <div className="d-flex flex-column ">
              <select  className="align-self-start" defaultValue={results.targetLanguage} onChange={handleSelectChanged}>
                {listLanguages.map( (aLang) => (
                  <option key={aLang} value={aLang}>{aLang}</option>
                ))}
              </select>

              {display.targetLanguage.displayInput &&
              <button type="button" className="mt-3 btn btn-light"
                onClick={handleAddInput}>Add</button>}

              {display.targetLanguage.displayInput &&
              <button type="button" className="mt-3 btn btn-light" onClick={handleNextStep}>Next</button>
              }

              </div>

              { //Display the input text when the source language is selected
                display.targetLanguage.displayInput && <div className="d-flex flex-column">
                {
                  results.targetWords.map( (element) => (
                    <div key={element.id} className="d-flex flex-row justify-content-end">

                    {/* Button to delete the input field */}
                    { element.id !== 0 && //Not displaying the button for the first input
                    <button type="button" className="btn btn-dark" onClick={handleRemoveInput(element)}>
                    Remove</button>}

                    <input
                      className="align-self-center"
                      type='text'
                      name="sourceWord"
                      placeholder="Type a target word"
                      defaultValue={element.word}
                      onBlur={handleEditInput(element)}
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
            <button className="btn btn-dark" type="button" onClick={handleReduceBlock(false)}>+</button>
          </div>
        }
      {/*END OF BLOCK TARGET LANGUAGE*/}
      </div>
    }
    </div>
  )
}

export default TargetLanguage;
