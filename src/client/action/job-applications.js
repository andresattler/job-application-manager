// @flow
import { createAction } from 'redux-actions'

export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const CHANGE_NAME = 'CHANGE_NAME'

export const addItem = createAction(ADD_ITEM)
export const deleteItem = createAction(DELETE_ITEM)
export const changeName = createAction(CHANGE_NAME)
