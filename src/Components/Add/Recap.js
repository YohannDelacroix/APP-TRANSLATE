function Recap({results}){
  return (<div className="border">
    <div className="d-flex flex-column justify-content-between">
      <h1>{results.sourceWord}</h1>

      <div className="mx-1 d-flex flex-row justify-content-between">
        <p>Lang : {results.sourceLanguage}</p>
        <p>Type : {results.features.type}</p>
        {
          (results.features.type === 'Adjective' || results.features.type === 'Name') &&
          <p>Gender : {results.features.gender}</p>

        }
        {
          (results.features.type === 'Adjective' || results.features.type === 'Name') &&
            <p>Number : {results.features.number}</p>
        }
      </div>

      <div>
        <h5>Context of use</h5>
        <div className="d-flex flex-row justify-content-between">
        {results.context.map( context => (
          <span key={context}>{context}</span>
        ))}
        </div>
      </div>
      <div  className="d-flex flex-row align-self-end justify-content-between">
      <p className="align-self-center">  Lang : {results.targetLanguage}</p>
      <h1>{results.targetWords[0].word}</h1>
      </div>
    </div>

  </div>);
}

export default Recap;
