import React from 'react'

export default function LocationCard ({ lName, lType, lDimension }) {
  // image={image}
  return (
  <section className="location-list grid-view">
    <p>{lName}</p>
    <p>{lType}</p>
    <p>{lDimension}</p>
  </section>
  )
}
