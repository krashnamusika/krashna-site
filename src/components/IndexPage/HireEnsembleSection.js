import Link from 'gatsby-link'
import React from 'react'

const HireEnsembleSection = () => {
  return (
    <div className="text-white bg-kamu">
      <div className="container pt-4 pb-4 text-center">
        <h2>Want to hire a musical ensemble for your occasion?</h2>
        <Link className="btn btn-light" to="/hire-ensemble">
          Learn more
          <span className="fa fa-caret-right ml-2" />
        </Link>
      </div>
    </div>
  )
}

export default HireEnsembleSection
