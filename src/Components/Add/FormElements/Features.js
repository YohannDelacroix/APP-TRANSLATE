import {useState, useEffect} from 'react'

function Features({display, setDisplay, results, setResults}){
  const title = (<h6>Word's Features</h6>)
  //Type of the word
  const type = ['Adjective', 'Name', 'Adverb', 'Verb'];
  const gender = ['Masculine', 'Feminine', 'Neutral'];
  const number = ['Singular', 'Plural'];

  //Displaying options of the component
  const [displayOptionalFeatures, setDisplayOptionalFeatures] = useState(false)

  /* handleReduceBlock
    EventType : Click on button "-"
    Parameters : boolean
      Hide or show the Target Language block on screen
  */
  const handleReduceBlock = (reduce) => (e) => {
    setDisplay(prevState => (
      {
        ...prevState,
        features:{...prevState.features, reduced: reduce}
      }
    ));
  };

  /*
    handleTypeChanged
      EventType: Type select menu have been changed
      Effects : Fill the results state
  */
  const handleTypeChanged = (e) => {
    setResults(prevResults => ({
      ...prevResults,
      features:{...prevResults.features, type:e.target.value}
    }));
  };

  /*
    handleGenderChanged
      EventType: Gender select menu have been changed
      Effects : Fill the results state
  */
  const handleGenderChanged = (e) => {
    setResults(prevResults => ({
      ...prevResults,
      features:{...prevResults.features, gender:e.target.value}
    }));
  };

  /*
    handleNumberChanged
      EventType: Number select menu have been changed
      Effects : Fill the results state
  */
  const handleNumberChanged = (e) => {
    setResults(prevResults => ({
      ...prevResults,
      features:{...prevResults.features, number:e.target.value}
    }));
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

  //Display the two optionnal features in case they have sense for the type
  useEffect( () => {
    if(results.features.type === type[0] || results.features.type === type[1]){
      setDisplayOptionalFeatures(true);
    }
    else setDisplayOptionalFeatures(false);
  }, [results.features.type])


  useEffect( () => {
    console.log(displayOptionalFeatures)
  }, [displayOptionalFeatures])

  return(
      display.features.display && <div>
      {                                 //Source Language when it is not reduced
        !display.features.reduced ?
        <div className="d-flex flex-column">

          <div className="d-flex flew-row justify-content-between align-items-center">
            {title}
            <button className="btn btn-dark" type="button" onClick={handleReduceBlock(true)}>-</button>
          </div>

          {/* Source Language form */}
          <div className="d-flex flex-column">
          <div className="d-flex m-3 justify-content-between">

            <select className="align-self-start" defaultValue={results.features.type} onChange={handleTypeChanged}>
            <option value="null"></option>
            {
              type.map( typ => (
                <option key={typ} value={typ} >{typ}</option>
              ))
            }
            </select>

            {
              displayOptionalFeatures && <div>
                <select defaultValue={results.features.gender} onChange={handleGenderChanged}>
                <option value="null"></option>
                {
                  gender.map( gend => (
                    <option key={gend} value={gend}>{gend}</option>
                  ))
                }
                </select>

                <select defaultValue={results.features.number} onChange={handleNumberChanged}>
                <option value="null"></option>
                {
                  number.map( numb => (
                    <option key={numb} value={numb}>{numb}</option>
                  ))
                }
                </select>
              </div>
            }

          </div>


          <div className="m-3 d-flex flex-row-reverse">
            <button type="button" className="btn btn-light" onClick={handleNextStep}>Next</button>
          </div>
          </div>
        </div>
        :                                   //Source Language when it is reduced
        <div className="d-flex flex-row justify-content-between align-items-center">
          {title}
          <button className="btn btn-dark" type="button" onClick={handleReduceBlock(false)}>+</button>
        </div>
      }
      </div>
  )
}

export default Features;
