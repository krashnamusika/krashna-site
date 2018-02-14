import React from 'react'
import expansion from './expansion-widget.png'
import topdesk from './topdesk-widget.png'
import tudelft from './tudelft-widget.png'

const SponsorSection = ({ title }) => {
  return (
    <div>
      <h5>{title}</h5>
      <img src={tudelft} width="75px" className="mr-3" />
      <img src={topdesk} width="75px" className="mr-3" />
      <img src={expansion} width="75px" />
    </div>
  )
}

export default SponsorSection
