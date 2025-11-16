import { useEffect, useState } from 'react'
import './App.css'
import SmileCard from './components/SmileCard'
import Winner from './components/Winner'

function App() {

  const [smiles, setSmiles] = useState([])
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setSmiles(data))
  }, [])

  function handleVote(id) {
    const newSmile = smiles.map(smile => {
      if (smile.id === id) {
        return { ...smile, Votes: smile.Votes + 1 }
      }
      return smile
    });
    setSmiles(newSmile)
  }

  function handleShowResult() {
    const win = smiles.reduce((acc, smile) => {
      if(smile.Votes > acc.Votes) {
        return smile
      }
      return acc
    })
    
    setWinner(win)
  }

  return (
    <>
      <div className='flex'>
        {smiles.map(smile => (
          <SmileCard smile={smile} key={smile.id} onVote={handleVote} />
        ))}
      </div>
      <button onClick={handleShowResult}>Show Results</button>
      <Winner winner={winner}></Winner>
    </>
  )
}

export default App
