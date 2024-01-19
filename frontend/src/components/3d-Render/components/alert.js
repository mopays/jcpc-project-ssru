import React from 'react'

function alert() {
    var alerts = alert('Geolocation os not supported by this browser');
  return (
    <div>{alerts}</div>
  )
}

export default alert