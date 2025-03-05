const FetchButton = ({ fetchJoke }) => {
  return (
    <button onClick={fetchJoke} className="fetch-button">
      Get a New Joke
    </button>
  )
}

export default FetchButton
