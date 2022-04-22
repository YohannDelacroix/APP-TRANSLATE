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


/*
      BUG : When no source/target word is typed, you can access the next displays (!!!!)
*/

import {useState, useEffect} from 'react'
import SourceLanguage from './FormElements/SourceLanguage.js'
import TargetLanguage from './FormElements/TargetLanguage.js'
import SelectContext from './FormElements/SelectContext.js'
import Features from './FormElements/Features.js'
import Finalization from './Finalization.js'

function AddForm({listLanguages, contextList}){

  //Control the form to display the elements one by one
  //  display : Is the part of the form visible and reducible ?
  //  reduced : Is the form reduced or entirely visible ?
  //  displayInput : is the input field visible ? ( <- Maybe this one could go into respective components)
  const displayDefault = { sourceLanguage: {display:true, displayInput: false, reduced: false},
                                          targetLanguage: {displayInput: false, display: false, reduced: false},
                                          context:{display:false, reduced: false},
                                          features:{display:false, reduced: false},
                                          validation:{display:false},
                                          finalization:{display:false}
  };
  const[display, setDisplay] = useState(displayDefault);

  //Here is the result of the form
  const resultsDefault = { sourceLanguage: "",
                                          sourceWord: "",
                                          targetLanguage: "",
                                          targetWords: [{word:"", id:0}],
                                          context: [{word:""}],
                                          features: {type:"", gender:"", number:""}
                                        };
  const[results, setResults] = useState(resultsDefault);



  const handleForm = (e) => {
    e.preventDefault();
    if(true){
      setDisplay( prevDisplay => ({
        ...displayDefault,
        sourceLanguage:{...displayDefault, display:false},
        finalization:{display:true}
      }));
    }
  };

  //Displaying the results in the console (Test checking)
  useEffect( () => {
    console.log("Following the results");
    console.log(results);
  }, [results])


  //Displaying the display parameters in the console (Test Checking)
  useEffect( () => {
    console.log(display);
  }, [display])





  return(
      <form onSubmit={handleForm}>

      <SourceLanguage listLanguages={listLanguages} display={display} setDisplay={setDisplay} results={results} setResults={setResults} />
      <TargetLanguage listLanguages={listLanguages} display={display} setDisplay={setDisplay} results={results} setResults={setResults} />
      <Features display={display} setDisplay={setDisplay} results={results} setResults={setResults} />
      <SelectContext contextList={contextList} display={display} setDisplay={setDisplay} results={results} setResults={setResults} />
      {
        display.validation.display && <div className="d-flex my-3 flex-column">
          <h5>Final Step</h5>
          <div className="d-flex justify-content-center">
          <button className="btn btn-light">Send my word</button>
          </div>
        </div>
      }
      <Finalization displayDefault={displayDefault} resultsDefault={resultsDefault} display={display} setDisplay={setDisplay} results={results} setResults={setResults} />
      </form>
  )
}

export default AddForm
