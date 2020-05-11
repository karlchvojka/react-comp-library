import React from "react";
import { Link } from "react-router-dom";


export default function SubNav({ subNavProps }) {

  return (
    <ul>
    {
      subNavProps.map(item =>
        <li>
          <Link to={item.linkDest}>{item.linkText}</Link>
        </li>
      )
    }
    </ul>
  )
}
