import React from 'react'

const MultiLineText = ({ lines }) => (
  <div>{lines.map((line, index) => <p key={index}>{line}</p>)}</div>
)

export default MultiLineText
