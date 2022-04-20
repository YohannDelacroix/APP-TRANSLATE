
function SourceLanguage({listLanguages, display, setDisplay, results, setResults}){

  /* handleReduceBlock
    EventType : Click on button "-"
    Parameters : boolean
      Hide or show the Source Language block on screen
  */
  const handleReduceBlock = (reduce) => (e) => {
    setDisplay(prevState => (
      {
        ...prevState,
        sourceLanguage: {...prevState.sourceLanguage,reduced: reduce}
      }
    ));
  };

  /*
    handleSelectChanged
      EventType : Select value changed
      Effects :
        1. Display the second part of the form
        2. Memorize the source language
  */
  const handleSelectChanged = (e) => {
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
  };

  /*
    handleEditInput
    EventType : The focus is out of the input field
    Effects : Memorize the source word and display the next step of the form
  */
  const handleEditInput = (e) => {
    setResults(prev => ({
      ...prev,
      sourceWord:e.target.value
    }));

    setDisplay(prevState => ({
      ...prevState,
      targetLanguage: {...prevState.targetLanguage, display:true}
    }));
  };

  return(
    <div>
    {                                 //Source Language when it is not reduced
      !display.sourceLanguage.reduced ?
      <div className="d-flex flex-column">

        <div className="d-flex flew-row justify-content-between align-items-center">
          Source language
          <button className="btn btn-dark" type="button" onClick={handleReduceBlock(true)}>-</button>
        </div>

        {/* Source Language form */}
        <div className="d-flex m-3 justify-content-between">
          <select className="align-self-start" defaultValue={results.sourceLanguage} onChange={handleSelectChanged}>
            {listLanguages.map( (aLang) => (
              <option key={aLang} value={aLang}>{aLang}</option>
            ))}
          </select>

          { //Display the input text when the source language is selected
            display.sourceLanguage.displayInput && <div>
              <input type='text'
                name="sourceWord"
                placeholder="Type the source word"
                defaultValue={results.sourceWord}
                onBlur={handleEditInput}
              />
            </div>
          }
        </div>
      </div>
      :                                   //Source Language when it is reduced
      <div className="d-flex flex-row justify-content-between align-items-center">
        Source language
        <button className="btn btn-dark" type="button" onClick={handleReduceBlock(false)}>+</button>
      </div>
    }
    </div>
  )
}

export default SourceLanguage;
