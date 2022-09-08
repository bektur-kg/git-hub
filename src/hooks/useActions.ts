import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import {gitHubActions} from 'store/github/github.slice'

const actions = {
  ...gitHubActions,
}

export const useReduxActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(actions, dispatch)
}