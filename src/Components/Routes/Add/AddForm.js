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

import {useState} from 'react'

function AddForm({listLanguages}){

  const[step1, setStep1] = useState(false)

  function handleForm(){

  }


  return(
      <form onSubmit={handleForm}>
      <p>Select a source language :</p>

      <div className="d-flex m-3 justify-content-between">
      <select onChange={() => setStep1(true)}>
        {listLanguages.map( (aLang) => (
          <option key={aLang}>{aLang}</option>
        ))}
      </select>

      {step1 && <div>
      <input type='text' name="sourceWord" placeholder="Type the source word"/>
      </div>}

      </div>



      </form>
  )
}

export default AddForm
