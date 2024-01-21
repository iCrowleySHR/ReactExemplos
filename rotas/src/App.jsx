import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Principal from './pages/Principal.jsx';
import Segundaria from './pages/Segundaria.jsx';
import Terciaria from './pages/Terciaria.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/segundaria' element={<Segundaria/>}/>
          <Route path='/terciaria' element={<Terciaria/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
