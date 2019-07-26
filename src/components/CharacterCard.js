import React from 'react'

// export default function CharacterCard ({ cImg, cName, cSpecies, cStatus, cLocation, cOrigin, cType }) {
  
  export default function CharacterCard ({ cImg, cName, cSpecies, cStatus, cLocation, cOrigin }) {
    return (<div>
    {/* <span>{cImg}</span> */}
    <img src={cImg} />
    <p>Name: {cName}</p>
    <p>Species {cSpecies}</p>
    <p>Status: {cStatus} </p>
    <p>Location: {cLocation}</p> 
    <p>Origin: {cOrigin} </p>
    {/* <p>Type: {cType}</p> */}
  </div> )
}
