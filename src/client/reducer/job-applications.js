// @flow
import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { ADD_ITEM, DELETE_ITEM, CHANGE_NAME } from '../action/job-applications'

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
      const nextId = state.get('items').last().get('id') + 1
      return state.update('items', items => items.push(Immutable.Map({ id: nextId, name: 'Test' })))
    }
    case DELETE_ITEM:
      return state.update('items', items => items.delete(action.payload))
    case CHANGE_NAME: {
      return state.update('items', items => items.update(action.payload.id, item => item.set('name', action.payload.val)))
    }
    default:
      return state
  }
}

export default jobApplicationsReducer
