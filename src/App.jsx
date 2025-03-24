import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element />
        </Routes>
      </div>
    </>
  )
}

export default App
