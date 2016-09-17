var React = require('react')

function Main () {
  return (
    <div className="container">
      {this.props.children}
    </div>
  )
}

module.exports = Main
