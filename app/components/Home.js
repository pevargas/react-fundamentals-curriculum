var React = require('react')

function Home () {
  return (
    <div className='home-page'>
      <h1>Enter a City and State</h1>
      <form>
        <input type='text' placeholder='Elizabeth, CO' className='form-control'/>
        <button type='submit' className='btn btn-success'>Get Weather</button>
      </form>
    </div>
  )
}

module.exports = Home
