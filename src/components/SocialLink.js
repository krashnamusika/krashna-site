import React from "react";

export const SocialLink = ({ iconName, url }) => (
  <a className="text-muted mr-2" href={url} target="blank">
    <i className={'fa fa-' + iconName} />
  </a>
)
