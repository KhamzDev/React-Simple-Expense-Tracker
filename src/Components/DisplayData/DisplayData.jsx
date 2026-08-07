
import styles from './DisplayData.module.css'



function DisplayData({ currentInVal, currentExVal }) {

  
  


  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div>Expense <span className={styles.expense}>{currentExVal}</span></div>
            <div>Income <span className={styles.income}>{currentInVal}</span></div>
        </div>
    </div>
  )
}

export default DisplayData