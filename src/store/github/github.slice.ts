import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LocalFavoriteKey} from 'models/models'

export interface IGithubState {
  favorites: string[]
}

const initialState: IGithubState = {
  favorites: JSON.parse(localStorage.getItem(LocalFavoriteKey.favorite) ?? '[]'),
}

export const gitHubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {

    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload)

      localStorage.setItem(LocalFavoriteKey.favorite, JSON.stringify(state.favorites))
    },

    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(fav => fav !== action.payload)

      localStorage.setItem(LocalFavoriteKey.favorite, JSON.stringify(state.favorites))
    },

  },

})

export const gitHubActions = gitHubSlice.actions
export const gitHubReducer = gitHubSlice.reducer
