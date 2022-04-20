/*
  SelectContext component ,
      List of checkbox to associate a word to a context
      The list is sorted in the alphabetic order
      Buttons : ChooseAll and ChooseNone
                Skip

      The checkbox list must be displayed by row of three elements
      
*/

import {useState, useEffect} from 'react'
function SelectContext({contextList, display, setDisplay, results, setResults}){
  const title = "Select a context";   //Title shown on the top of the section block

  const [rowIndex, setRowIndex] = useState(0);

  //Initialise a hash map for the context's checkbox
  //  Key : name of the context
  //  Value : boolean showing state of the checkbox
  const checkedMap = new Map();
  contextList.forEach( context => {
    checkedMap.set(context, false);
  });
  const [checked, setChecked] = useState(checkedMap)


  /*
    handleCheckBox
  */
  const handleCheckBox = (e) => {
    let checkedTemp = new Map(checked);
    checkedTemp.set(e.target.value, e.target.checked);
    setChecked( prevChecked => (checkedTemp));
  };


  /* handleReduceBlock
    EventType : Click on button "-"
    Parameters : boolean
      Hide or show the Target Language block on screen
  */
  const handleReduceBlock = (reduce) => (e) => {
    setDisplay(prevState => (
      {
        ...prevState,
        context:{...prevState.context, reduced: reduce}
      }
    ));
  };

  const displayContext = () => {
    return contextList.map( context => {
      return (<div><label key={context}>
        <input type="checkbox" name="context" value={context} defaultChecked={checked.get(context)} onChange={handleCheckBox} />
        {context}
      </label></div>)
    })
  };

  useEffect( () => {
    console.log(checked);
  }, [checked])




  return(
    display.context.display && <div>
      {
        !display.context.reduced ? //Block context is totally visible
        <div className="d-flex flex-column">
          <div className="d-flex flew-row justify-content-between align-items-center">
            {title}
            <button className="btn btn-dark" type="button" onClick={handleReduceBlock(true)}>-</button>
          </div>

          <div>
            <p>Define the contexts in which the word you typed can be used</p>
            {
              contextList.map( context => {
                return (<div><label key={context}>
                  <input type="checkbox" name="context" value={context} defaultChecked={checked.get(context)} onChange={handleCheckBox} />
                  {context}
                </label></div>)
              })
            }
          </div>

        </div>
        : //Block context is reduced
        <div className="d-flex flex-row justify-content-between align-items-center">
          {title}
          <button className="btn btn-dark" type="button" onClick={handleReduceBlock(false)}>+</button>
        </div>
      }
    </div>
  )
}

export default SelectContext;
