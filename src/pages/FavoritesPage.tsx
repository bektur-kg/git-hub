import React from 'react'
import {useAppSelector} from 'hooks/useRedux'
import {Helmet} from 'react-helmet-async'

const FavoritesPage = () => {
  const {favorites} = useAppSelector(state => state.github)

  if (favorites.length === 0) return <span className="flex items-center container mx-auto pt-10 flex-col h-screen">No favorite repositories</span>
  return (
    <>
      <Helmet>
        <title>Favorites</title>
        <meta
          name="description"
          content="Favorite repositories that you saved."
        />
        <link rel="canonical" href={'/favorites'}/>
      </Helmet>
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

    </>
  )
}

export default FavoritesPage
