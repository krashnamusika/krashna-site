import React from 'react'
import DaanDonationModule from '../DaanDonationModule'

const MonumentDonationSection = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container pt-5 pb-5 text-center">
        <DaanDonationModule moreInformation={true} buttonDark={false} />
      </div>
    </div>
  )
}

export default MonumentDonationSection
