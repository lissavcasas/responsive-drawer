import React, {Fragment} from 'react'

export default function Text({title, description, published}) {
  return (
    <Fragment>
      <h4>{title} ({published})</h4>
      <p>{description ? description : <i>No Description</i>}</p>
    </Fragment>
  )
}
