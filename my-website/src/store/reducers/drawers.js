import { createReducer } from 'redux-act'
import produce from 'immer'

import { setIsMyDrawerOpen, setIsSearchDrawerOpen } from 'store/actions'

export default createReducer(
  {
    [setIsMyDrawerOpen]: produce(
      (draft, payload) => (draft.isMyDrawerOpen = payload),
    ),
    [setIsSearchDrawerOpen]: produce((draft, payload) => {
      draft.isSearchDrawerOpen = payload
    }),
  },
  { isMyDrawerOpen: true, isSearchDrawerOpen: false },
)
