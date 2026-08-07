import styles from './Handler.module.css'
import InputData from './InputData/InputData'
import DisplayData from './DisplayData/DisplayData'
import TransactionList from './TransactionList/TransactionList'
import { useState } from 'react'





function Handler() {

  
  const [tranArray, setTranArray] = useState([]);
  const [currentVal, setCurrentVal] = useState(0);
  const [currentInVal, setCurrentInVal] = useState(0);
  const [currentExVal, setCurrentExVal] = useState(0);



  return (
    <>
      <InputData 
        setTranArray={setTranArray}
        currentVal={currentVal}
        setCurrentVal={setCurrentVal}
        setCurrentInVal={setCurrentInVal}
        setCurrentExVal={setCurrentExVal}
        currentInVal={currentInVal} currentExVal={currentExVal}
      />
      <DisplayData currentInVal={currentInVal} currentExVal={currentExVal}/>
      <TransactionList tranArray={tranArray} />
    </>
  )
}

export default Handler


        