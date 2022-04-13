import 'bootstrap/dist/css/bootstrap.min.css';

function Option({text, id, correct}){
  return(
    <button key={id} onClick={() => checkAnswer(correct)} className="list-group-item  list-group-item-action">{text}</button>
  )
}


//Check whether the user's answer is correct or not
function checkAnswer(correct){
  if(correct === true){
    alert("Bon")
  }
  else{
    alert("Mauvais")
  }
}

export default Option;
