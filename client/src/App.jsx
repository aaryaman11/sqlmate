import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

import { useState } from 'react'


function App() {
  const [queryDescription, setQueryDescription] = useState('');
  const [sqlQuerry, setSqlQuerry] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const generatedQuerry =  await generateQuery()
    setSqlQuerry(generatedQuerry)
  
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({queryDescription: queryDescription}),
    });
    const data = await response.json();
    return data.response.trim();
  };

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="sqlLogo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Create your query" name="Query-description" onChange={(e) => setQueryDescription(e.target.value)} />
        <input type="submit" value='Generate query' />
        <pre>
          {sqlQuerry}
        </pre>
      </form>

    </main>
  )
}

export default App
