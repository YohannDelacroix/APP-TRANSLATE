import AddForm from './AddForm.js'

function TestAddForm(){
  /* Simulation of the entering datas */
  const listLanguages = [
    'English',
    'German',
    'French',
    'Spanish'
  ];

  const contextList = [
    'Nature',
    'Music',
    'Politic',
    'Science',
    'Cinema',
    'Space',
    'Physics',
    'Cities',
    'Asia',
    'Buddhism',
  ];

  return(
    <AddForm listLanguages={listLanguages} contextList={contextList} />
  )

}

export default TestAddForm
