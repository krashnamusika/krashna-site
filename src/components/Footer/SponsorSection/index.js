import React from 'react'
import expansion from './expansion-widget.png'
import topdesk from './topdesk-widget.png'
import tudelft from './tudelft-widget.png'
import tdv from './tdv-widget.png';

const SponsorSection = ({ title }) => {
  return (
    <div>
      <h5>{title}</h5>
      <a href="https://www.tudelft.nl/" title="Delft University of Technology">
        <img src={tudelft} width="75px" className="mr-3" alt="TU Delft" />
      </a>
      <a href="http://www.werkenbijtopdesk.nl/" title="TOPdesk">
        <img src={topdesk} width="75px" className="mr-3" alt="TOPdesk" />
      </a>
      <a href="https://www.expansion.nl/en/" title="Expansion">
        <img src={expansion} width="75px" className="mr-3" alt="Expansion" />
      </a>
      <a href="https://www.theaterdeveste.nl/" title="Theater de Veste">
        <img src={tdv} width="75px" alt="Theater de Veste" />
      </a>
    </div>
  )
}

export default SponsorSection
