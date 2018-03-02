import Link from "gatsby-link"
import React from 'react'
import {translate} from "react-i18next";

const ConcertSection = ({concerts, t}) => {
  const dateCheckpoint = new Date();
  dateCheckpoint.setDate(dateCheckpoint.getDate() - 2);
  console.log(dateCheckpoint, concerts)
  const sortedConcerts = concerts.map(obj => obj.node)
    .filter(concert => new Date(concert.date) > dateCheckpoint)
    .sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));

  return (
    <div>
      <div className="container pt-5 pb-5">
        <h2 className="text-center">Upcoming Concerts</h2>
        {sortedConcerts.map(concert => (
          <div key={concert.id}>
            <h5>
              <Link to={`/concerts/${concert.id}`}>
                {t(`concerts.${concert.id}.title`)}
              </Link>
            </h5>
            <p>
              {new Date(concert.date).toLocaleDateString("nl-NL")}
              {" - "}
              <a href={concert.locationLink}>
                {concert.location}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default translate('translations')(ConcertSection)
