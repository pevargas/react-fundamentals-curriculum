var React = require('react')

function Main (props) {
  return (
    <div className='main-container'>
      <div className='navbar navbar-default'>
        <div className='navbar-header'>
          <a className='navbar-brand'>React Fundamentals Cirriculum App</a>
        </div>
      </div>
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
}

module.exports = Main
