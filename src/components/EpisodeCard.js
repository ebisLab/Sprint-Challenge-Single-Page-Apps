import React from 'react'

export default function EpisodeCards ({ eName, eDate, episd }) {
  return (
    <section className="location-list grid-view">

    <p>{eName}</p>
    <p>{eDate}</p>
    <p>{episd}</p>
  </section>
    )
}

