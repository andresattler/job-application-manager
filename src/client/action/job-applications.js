// @flow
import { createAction } from 'redux-actions'
import { dbGET } from '../util/db-interaction'

export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const CHANGE_NAME = 'CHANGE_NAME'
export const SET_ITEMS = 'SET_ITEMS'

export const setItems = createAction(SET_ITEMS)
export const addItem = createAction(ADD_ITEM)
export const deleteItem = createAction(DELETE_ITEM)
export const changeName = createAction(CHANGE_NAME)

export const getData = () => (dispatch: Function) => {
  dbGET().then((data) => {
    dispatch(setItems(data))
  })
}
