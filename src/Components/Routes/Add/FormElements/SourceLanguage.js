
function SourceLanguage({listLanguages, display, setDisplay, results, setResults}){
  return(
    <div>
    {                                 //Source Language when it is not reduced
      !display.sourceLanguage.reduced ?
      <div className="d-flex flex-column">

        <div className="d-flex flew-row justify-content-between align-items-center">
          Source language
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
          <select className="align-self-start" defaultValue={results.sourceLanguage} onChange={(e) => {
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
                defaultValue={results.sourceWord}
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
        Source language
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
    </div>
  )
}

export default SourceLanguage;
