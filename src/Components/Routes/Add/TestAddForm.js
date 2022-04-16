import AddForm from './AddForm.js'

function TestAddForm(){
  /* Simulation of the entering datas */
  const listLanguages = [
    'English',
    'German',
    'French',
    'Spanish'
  ]

  return(
    <AddForm listLanguages={listLanguages} />
  )

}

export default TestAddForm
