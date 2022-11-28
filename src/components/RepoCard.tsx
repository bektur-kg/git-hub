import React, {useState} from 'react'
import {IRepo} from 'models/models'
import {useAppSelector} from 'hooks/useRedux'
import {useReduxActions} from 'hooks/useActions'

const RepoCard = ( { repository } : { repository: IRepo } ) => {
  const {favorites} = useAppSelector(state => state.github)
  const {addToFavorites, removeFromFavorites} = useReduxActions()

  const [isFavorite, setIsFavorite] = useState(favorites.includes(repository.html_url))



  const addToFavoriteHandler = () => {
    addToFavorites(repository.html_url)

    setIsFavorite(true)
  }

  const removeFromFavoritesHandler = () => {
    removeFromFavorites(repository.html_url)

    setIsFavorite(false)
  }

  return (
    <li
      className="border cursor-pointer px-3 py-4 rounded mb-4 hover:shadow-xl hover:transition-all"
    >
      <div >
        <a
          className="mb-2 text-zinc-900 text-xl hover:text-blue-900"
          href={repository.html_url} target="_blank" rel="noreferrer"
        >{repository.full_name}</a>
        <p className="flex flex-col">
          <span>Forks: {repository.forks}</span>
          <span>Watchers: {repository.watchers}</span>
        </p>
        <p>{repository.description}</p>

        {
          isFavorite ? (
            <button
              className="px-3 py-1 bg-red-600 mt-5 rounded text-white hover:px-4 hover:transition-all"
              onClick={removeFromFavoritesHandler}
            >Remove</button>
          ) : (
            <button
              className="px-3 py-1 bg-indigo-600 mt-5 rounded text-white hover:px-4 hover:transition-all"
              onClick={addToFavoriteHandler}
            >Add</button>
          )
        }
      </div>
    </li>
  )
}

export default RepoCard
