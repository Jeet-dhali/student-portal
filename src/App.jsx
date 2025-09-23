import {Navbar} from './components/header.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <Navbar />
      </div>
      <div className='content'>
        <h3 className='welcome-text'>Welcome to</h3>
        <h1 className='main-title'>NIT Nagaland</h1>
        <h2 className='subtitle'>Student Council</h2>
      </div>
    </>
  )
}

export default App
