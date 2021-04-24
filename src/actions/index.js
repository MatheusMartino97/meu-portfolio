import { UPDATE_FILTER } from './actionTypes'


const updateSearchBarFilter = (filter) => ({
  type: UPDATE_FILTER,
  filter,
})

export { updateSearchBarFilter }