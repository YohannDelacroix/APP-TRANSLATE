/*
  The add component allows to add new vocabulary stuff into the database
    -> Select Source language from (English, French, Spanish, German)
      -> fill the input
    -> Select Target language
      -> fill the input
          -> add another translation with a "+" button
            -> fill the input
              ...
    -> Select the context (from the list of context)
        -> Or add a new context
        -> Fill context name

    -> Add type between Word, adjective, adverb and verb
      -> In case Word or adjective
        -> Select the gender from Masculine, Feminine or Neuter
        -> Select the number singular or plural
          -> Propose to add the other (Yes / No )
            -> Fill the input

    -> Validate and return the datas in an object
*/

import {useState, useEffect} from 'react'

function AddForm({listLanguages}){

  //Control the form to display the elements one by one
  const[display, setDisplay] = useState({ sourceLanguage: {displayInput: false, reduced: false},
                                          targetLanguage: {display: false, reduced: false}
  });

  //Here is the result of the form
  const[results, setResults] = useState({sourceLanguage: "", sourceWord: ""});

  function handleForm(){

  }

  //Displaying the results in the console (Test checking)
  useEffect( () => {
    console.log("Following the results")
    console.log("Source Language : ", results.sourceLanguage, "; Source word : ", results.sourceWord)
  }, [results])


  //Displaying the display parameters in the console (Test Checking)
  useEffect( () => {
    console.log(display)
  }, [display])





  return(
      <form onSubmit={handleForm}>

      {                                 //Source Language when it is not reduced
        !display.sourceLanguage.reduced ?
        <div className="d-flex flex-column">

          <div className="d-flex flew-row justify-content-between align-items-center">
            Select a source language :
            <button className="btn btn-dark" type="button" onClick={ () => {
              setDisplay(prevState => (
                {
                  ...prevState,
                  sourceLanguage: {...prevState.sourceLanguage,reduced: true}
                }
              ));
            }}
            >-</button>
          </div>

          {/* Source Language form */}
          <div className="d-flex m-3 justify-content-between">
            <select onChange={(e) => {
                setDisplay(prevState => (
                  {
                    ...prevState,
                    sourceLanguage: {...prevState.sourceLanguage, displayInput: true}
                  }
                ));

                setResults(prevState => ({
                  ...prevState,
                  sourceLanguage:e.target.value
                }));
            }}>
              {listLanguages.map( (aLang) => (
                <option key={aLang} value={aLang}>{aLang}</option>
              ))}
            </select>

            { //Display the input text when the source language is selected
              display.sourceLanguage.displayInput && <div>
                <input type='text'
                  name="sourceWord"
                  placeholder="Type the source word"
                  onBlur={(e) => {
                    setResults(prev => ({
                      ...prev,
                      sourceWord:e.target.value
                    }));

                    setDisplay(prevState => ({
                      ...prevState,
                      targetLanguage: {...prevState.targetLanguage, display:true}
                    }));
                  }}
                />
              </div>
            }
          </div>
        </div>
        :                                   //Source Language when it is reduced
        <div className="d-flex flex-row justify-content-between align-items-center">
          Select a source language :
          <button className="btn btn-dark" type="button" onClick={ () => {
            setDisplay(prev => (
              {
                ...prev,
                sourceLanguage: {...prev.sourceLanguage,reduced: false}
              }
            ));
          }}>+</button>
        </div>
      }


      {
        display.targetLanguage.display &&
        <div className="d-flex flex-column">

          <div className="d-flex flew-row justify-content-between align-items-center">
            Select a target language for {results.sourceWord}
            <button className="btn btn-dark" type="button" onClick={ () => {
              /*let displayTemp = display
              displayTemp.targetLanguage.reduced=true
              setDisplay(displayTemp)*/
            }}
            >-</button>
          </div>

        </div>
      }




      </form>
  )
}

export default AddForm
