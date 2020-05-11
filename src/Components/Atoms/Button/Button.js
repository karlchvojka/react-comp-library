import React from "react";

export default function Button({ text, name, type, value, className }) {
  return <button className={className} name={name} type={type} value={value}>{text}</button>
}
