import React from 'react'
import "./Header.css"

export default function Header({ sectionName }) {
  console.log();
  return (
    <h1 className='header mx-auto text-uppercase text-center fw-bold mt-2'>{sectionName}
      <i className="fa-solid fa-star"></i>
    </h1>
  )
}