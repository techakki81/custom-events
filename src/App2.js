import logo from './logo.svg';
import './App.css';
import Form from './componets/Form'
import {useState,useEffect} from 'react'

function App2() {

const [state, setstate] = useState(null)

  const raisedEvent = (e)=>{
    console.log(e.detail)
    setstate(e.detail)
  }
  
  useEffect(() => {
    
    window.addEventListener("formEventRaised", raisedEvent)
    
    return () => {
      window.removeEventListener("formEventRaised",raisedEvent)
    }

  }, [])


  return (
    <div className="App">
      <Form></Form> 
      
    </div>
  );
}

export default App2;
