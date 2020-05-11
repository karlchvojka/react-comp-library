import React from "react";
import Glink from "../Glink/Glink.js"

export default function LinkImg({ GlinkProps, ImgProps }) {
  return (
    <Glink
      className={GlinkProps.className}
      href={GlinkProps.href}
      target={GlinkProps.target}
      title={GlinkProps.title}
      linkText={<img className={ImgProps.className} src={ImgProps.src} alt={ImgProps.alt} />}
    >
    </Glink>
  )
}
