import React from 'react'

const CenteredEmbed = ({ children }) => {
  return (
    <div className="embed-responsive embed-responsive-16by9 col-lg-9 col-12 mx-auto">
      {children}
    </div>
  )
}

export default CenteredEmbed
