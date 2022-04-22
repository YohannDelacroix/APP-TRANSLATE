import Recap from './Recap.js'
function Finalization({displayDefault, resultsDefault, display, setDisplay, results, setResults}){

  const handleAnotherWord = () => {
    setDisplay(displayDefault);
    setResults(resultsDefault);
  };

  return(
    display.finalization.display && <div className="d-flex flex-column">
      <div>
      <p>Done ! The word has been successfully saved in our database</p>
      <Recap results={results}/>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-light" type="button" onClick={handleAnotherWord}>Add another word</button>
      </div>
    </div>
  )
}

export default Finalization;
