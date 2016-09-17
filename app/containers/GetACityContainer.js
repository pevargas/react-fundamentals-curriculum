var React = require('react')
var GetACity = require('../components/GetACity')

var GetACityContainer = React.createClass({
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleUpdateCity: function (event) {
    this.setState({
      city: event.target.value
    })
  },
  render: function () {
    return (
      <GetACity
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
})

module.exports = GetACityContainer
