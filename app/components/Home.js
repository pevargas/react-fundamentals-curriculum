var React = require('react')
var GetACityContainer = require('../containers/GetACityContainer')

function Home () {
  return (
    <div className='home-page'>
      <h1>Enter a City and State</h1>
      <GetACityContainer />
    </div>
  )
}

module.exports = Home
