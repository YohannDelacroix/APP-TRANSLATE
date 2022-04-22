/*
  SelectContext component ,
      List of checkbox to associate a word to a context
      The list is sorted in the alphabetic order
      Buttons : ChooseAll
                Skip

      The checkbox list must be displayed by row of three elements

*/

import {useState, useEffect} from 'react'
function SelectContext({contextList, display, setDisplay, results, setResults}){
  const title = <h6>Select a context</h6>;   //Title shown on the top of the section block



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
    EventType : The checkbox have changed
    Effects : Set the new value in the checked state
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

  /*
    handleSelectAll
    Parameters: all(boolean)
    EventType: Click on the buttons Select All or No one
    Effects : Check all the checkboxes to the value of parameter
              Display the next step
  */
  const handleSelectAll = (all) => (e) => {
    let checkedTemp = new Map(checked);
    checkedTemp.forEach((value, key) => {
      checkedTemp.set(key, all)
    });
    setChecked( prevChecked => (checkedTemp));
  };

  /*
    displayNextStep
      Show the next step of the form : Features
  */
  const displayNextStep = () => {
    setDisplay(prevDisplay => ({
      ...prevDisplay,
      validation:{...prevDisplay.validation, display:true}
    }));
  };

  /*
    saveResults
      analyse the checkboxes into checked state and fill the datas in results state
  */
  const saveResults = () => {
    let contextTab = []
    checked.forEach((value, key) => {
      if(value){
        contextTab.push(key);
      }
    });
    //console.log(contextTab);
    setResults(prevResults => ({
      ...prevResults,
      context:contextTab
    }));


  };

  /*
    Save the results each time a box is checked
  */
  useEffect( () => {
    console.log(checked);
    saveResults();
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
            <div className="d-flex flex-row justify-content-between">
            <div>
            {
              contextList.map( context => {
                return (<div key={context}><label>
                  <input type="checkbox" name="context" value={context} checked={!!checked.get(context)} onChange={handleCheckBox} />
                  {context}
                </label></div>)
              })
            }
            </div>
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex flex-row">
                <button type="button" className="mx-2 btn btn-light" onClick={handleSelectAll(true)}>Select All</button>
                <button type="button" className="btn btn-light" onClick={handleSelectAll(false)}>No one</button>
              </div>
              <div className="d-flex flex-row-reverse">
                <button type="button" className="btn btn-light" onClick={displayNextStep}>Next</button>
              </div>
            </div>
            </div>
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
