import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJoke()
  }, [])

  const fetchJoke = () => {
    setLoading(true)
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching joke:', error)
        setLoading(false)
      })
  }

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
