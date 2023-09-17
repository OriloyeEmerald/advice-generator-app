import { useEffect, useState } from 'react'
import './App.css'
import Advice from './components/advice'
import axios from 'axios';

const API_URL = 'https://api.adviceslip.com/advice';
function App() {
 const [number, setNumber] = useState(0);

const [advice, setAdvice] = useState('');
const [isLoading, setIsLoading] = useState(true)

 const  getAdvice = async () => {
   try {
    const res = await axios.get(API_URL);
    const adviceMe = res.data.slip.advice;
    const id = res.data.slip.id;
    setIsLoading(false);
    setAdvice(adviceMe);
    setNumber(id)
   } catch (error) {
     console.log(error);
   }
   
 }

   useEffect(() => {
      getAdvice()
   }, [])
  return (
    <>
      <Advice 
      advice={advice} 
      number={number} 
      getAdvice={getAdvice}
      isLoading={isLoading}
      />
    </>
  )
}

export default App
