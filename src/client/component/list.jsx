// @flow
import React from 'react'
import type { List as ImmutList, Map } from 'immutable'

type PropTypes = {
  items: ImmutList<Map<string, number>>,
  handleDelete: Function,
  changeName: Function,
}

const List = ({ items, handleDelete, changeName }: PropTypes) => (
  <div className="list">
    {
      items.map((item, i) => (
        <div className="li" key={item.get('id')}>
          <input type="text" value={item.get('name')} onChange={e => changeName({ id: i, val: e.target.value })} />
          <button className="delete-button" onClick={() => handleDelete(i)}>x</button>
        </div>
    ))}
  </div>
)

export default List
