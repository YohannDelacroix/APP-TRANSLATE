import {Routes, Route} from 'react-router-dom'

import Training from './Components/Routes/Training/Training.js'
import Add from './Components/Routes/Add/Add.js'
import About from './Components/Routes/About/About.js'
import Home from './Components/Routes/Home/Home.js'

function App() {

  return (
        <Routes>
          <Route path="/APP-TRANSLATE" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/About" element={<About />} />
        </Routes>
  );
}

export default App;
