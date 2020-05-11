import React from "react";

export default function Glink({ className, href, target, title, linkText }) {
  return <a className={className} href={href} target={target} title={title}>{linkText}</a>
}
