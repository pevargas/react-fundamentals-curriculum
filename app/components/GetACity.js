var React = require('react')
var PropTypes = React.PropTypes

function GetACity (props) {
  return (
    <form>
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='Elizabeth, NJ'
          onChange={props.onUpdateCity}
          value={props.city}
          type='text' />
      </div>
      <pre>{props.city}</pre>
      <div className='form-group'>
        <button type='submit' className='btn btn-success'>Get Weather</button>
      </div>
    </form>
  )
}

GetACity.propTypes = {
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetACity
