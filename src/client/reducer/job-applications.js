// @flow
import 'isomorphic-fetch'
import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { SET_ITEMS, ADD_ITEM, DELETE_ITEM, CHANGE_NAME } from '../action/job-applications'
import { dbPush, dbRemove, dbUpdate } from '../util/db-interaction'

const initialState = Immutable.fromJS({
  items: [],
})

type Action = {
  type: string,
  payload: any,
}

const jobApplicationsReducer = (state: Immut = initialState, action: Action) => {
  switch (action.type) {
    case SET_ITEMS:
      return state.set('items', Immutable.fromJS(action.payload))
    case ADD_ITEM: {
      const nextId = state.get('items').size > 0 ? state.get('items').last().get('id') + 1 : 0
      dbPush({ id: nextId, name: 'Test' })
      return state.update('items', items => items.push(Immutable.Map({ id: nextId, name: 'Test' })))
    }
    case DELETE_ITEM:
      dbRemove(state.get('items').get(action.payload).get('id'))
      return state.update('items', items => items.delete(action.payload))
    case CHANGE_NAME: {
      dbUpdate(state.get('items').get(action.payload.id).get('id'), action.payload.val)
      return state.update('items', items => items.update(action.payload.id, item => item.set('name', action.payload.val)))
    }
    default:
      return state
  }
}

export default jobApplicationsReducer
