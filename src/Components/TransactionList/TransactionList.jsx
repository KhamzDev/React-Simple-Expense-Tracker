import styles from './TransactionList.module.css'



function TransactionList({ tranArray }) {



  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <h3>Transactions</h3>
            <div className={styles.list_container}>
                
                {tranArray.map((item, index) => (
                    <div key={index} className={styles.list}>
                        <p>{item.description}</p>
                        <p>{item.ammount}</p>
                        <div className={styles[item.type]}></div>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default TransactionList