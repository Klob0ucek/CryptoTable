import { useState } from 'react'
import './App.css'
import CurrencyList from "./components/CurrencyList.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CryptoTable</h1>
      <div className="card">
          <p>
              Basic app setup
          </p>
          <CurrencyList/>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
      </div>
    </>
  )
}

export default App
