import React from 'react'

export default function Logo({ imgSrc, ...rest }) {
  return (
    <div {...rest}>
      <img src={imgSrc} height="66px" alt="icon" />
    </div>
  )
}
