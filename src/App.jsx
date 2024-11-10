
import './App.css'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'

function App() {
  return  <div>
  

    <BrowserRouter>
    <Link to='/'> Allen </Link>

    <Link to='/neet/online-coaching-class-11'> Class11 </Link>

   <Link to='/neet/online-coaching-class-12'> Class12 </Link>

    <Routes>
      <Route  path='/neet/online-coaching-class-11' element={<Class11program/>}/>
      <Route  path='/neet/online-coaching-class-12' element={<Class12program/>}/>
      <Route  path='/' element={<Landing/>}/>
      <Route  path="*" element={<Errorpage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
}

function Errorpage(){
  return <div>
    sorry page is not found
  </div>
}

function Landing(){
  return <div>
    Welcome to alien
  </div>
}

function Class11program(){
  return <div>
    NEET  Calls 11 program details
  </div>
}

function Class12program(){
  return <div>
    NEET  Calls 12 program details
  </div>
}
export default App
