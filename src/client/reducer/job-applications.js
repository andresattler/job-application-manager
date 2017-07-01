// @flow
import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { ADD_ITEM } from '../action/job-applications'

const initialState = Immutable.fromJS({
  items: [
    { id: 0, name: 'Company 1' },
    { id: 1, name: 'Company 2' },
    { id: 2, name: 'Company 3' },
  ],
})

type Action = {
  type: string,
  payload: any,
}

const jobApplicationsReducer = (state: Immut = initialState, action: Action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const nextId = state.get('items').size + 1
      return state.update('items', items => items.push(Immutable.Map({ id: nextId, name: 'Test' })))
    }
    default:
      return state
  }
}

export default jobApplicationsReducer
