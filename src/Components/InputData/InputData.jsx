import { useState } from 'react'
import styles from './InputData.module.css'



function InputData({ setTranArray, currentVal, setCurrentVal, setCurrentInVal, setCurrentExVal, currentInVal, currentExVal }) {

    const [toggleForm, setToggleForm] = useState(false)
    const [tranType, setTranType] = useState();
    

    function handleForm(event){
        event.preventDefault()

        const elements = event.target.elements

        if(tranType === "expense"){
            setCurrentVal(p => p - Number(elements.ammount.value))
            setCurrentExVal(p => p + Number(elements.ammount.value))
        }
        if(tranType === "income"){
            setCurrentVal(p => p + Number(elements.ammount.value))
            setCurrentInVal(p => p + Number(elements.ammount.value))
        }



        const ammountVal = Number(elements.ammount.value);
        const descriptionVal = elements.description.value;
        

        setTranArray(prev => [...prev, {ammount: ammountVal, description: descriptionVal, type: tranType}]);

        setToggleForm(false)
        

    }



  return (
    <div className={styles.container}>

        <div className={styles.main_display}>
            <p className={styles.balance_text}>Balance: {currentVal}</p>

            <button 
                className={styles.toggle_form_btn}
                onClick={() => setToggleForm(!toggleForm)}
            >
                {toggleForm === false ? 'Add' : 'Close'}
            </button>

        </div>

        {toggleForm === true ? <div className={styles.form_container}>
            <form onSubmit={handleForm} method='GET'>
                <input className={styles.text_input} type='text' placeholder='Ammount' name='ammount'required></input>
                <input className={styles.text_input} type='text' placeholder='Description' name='description' required></input>

                <div className={styles.radio_input}>
                    <label>
                        <input type='radio' name='flow_type' value='expense' required onChange={(e) => setTranType(e.target.value)}></input>
                        Expense
                    </label>
                    <label>
                        <input type='radio' name='flow_type' value='income' required onChange={(e) => setTranType(e.target.value)}></input>
                        Income
                    </label>
                </div>

                <button className={styles.radio_submit} type='submit'>Submit</button>
            </form> 
        </div> : null}

    </div>
  )
}

export default InputData