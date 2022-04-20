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
import SourceLanguage from './FormElements/SourceLanguage.js'
import TargetLanguage from './FormElements/TargetLanguage.js'
import SelectContext from './FormElements/SelectContext.js'

function AddForm({listLanguages, contextList}){

  //Control the form to display the elements one by one
  const[display, setDisplay] = useState({ sourceLanguage: {displayInput: false, reduced: false},
                                          targetLanguage: {displayInput: false, display: false, reduced: false},
                                          context:{display:false, reduced: false}
  });

  //Here is the result of the form
  const[results, setResults] = useState({ sourceLanguage: "",
                                          sourceWord: "",
                                          targetLanguage: "",
                                          targetWords: [{word:"", id:0}],
                                          context: ""
                                        });

  function handleForm(){

  }

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
      <SelectContext contextList={contextList} display={display} setDisplay={setDisplay} results={results} setResults={setResults} />

      </form>
  )
}

export default AddForm
