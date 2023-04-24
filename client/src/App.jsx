import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

import { useState } from 'react'


function App() {
  const [querryDescerption, setQuerryDescerption] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("form submitted:", querryDescerption)
  }

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="sqlLogo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Create your query" name="Query-description" onChange={(e) => setQuerryDescerption(e.target.value)} />
        <input type="submit" value='Generate querry' />
      </form>

    </main>
  )
}

export default App
