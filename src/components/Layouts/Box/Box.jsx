import React from 'react'

export const Box = ({idCharacter, nameCharacter, imgCharacter}) => {
  return (
      <div id="box" key={idCharacter}>
          <h2>{nameCharacter}</h2>
          <img src={imgCharacter} alt={nameCharacter}></img>
      </div>
)};
