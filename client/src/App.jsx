import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'


function App() {
  

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="sqlLogo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>


    </main>
  )
}

export default App
