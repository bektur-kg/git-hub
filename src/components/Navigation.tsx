import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-xl bg-blue-800 text-white">
      <h1 className="font-semibold text-xl">GitHub Search</h1>

      <span>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </span>
    </nav>
  )
}

export default Navigation
