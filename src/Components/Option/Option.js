import 'bootstrap/dist/css/bootstrap.min.css';

function Option({solutionBody, idOption, setIdOption}){
  //Check whether the user's answer is correct or not


  return(
    <div>
      <button onClick={() => setIdOption(solutionBody.id)} className="list-group-item  list-group-item-action">{solutionBody.content}</button>
    </div>
  )
}




export default Option;
