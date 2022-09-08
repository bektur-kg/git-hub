import React from 'react'
import {useAppSelector} from 'hooks/useRedux'

const FavoritesPage = () => {
  const {favorites} = useAppSelector(state => state.github)

  if (favorites.length === 0) return <span className="flex items-center container mx-auto pt-10 flex-col h-screen">No favorite repositories</span>
  return (
    <ul className="flex items-center container mx-auto pt-10 flex-col h-screen">
      {
        favorites.map(item => (
          <li
            key={item}
            className="py-3 border px-5 rounded my-2 hover: hover:bg-indigo-600 hover:text-white transition-all"
          >
            <a
              href={item}
              target="_blank"
              rel="noreferrer"
            >{item}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default FavoritesPage
