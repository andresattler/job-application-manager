// @flow
import React from 'react'
import type { List as ImmutList, Map } from 'immutable'

const List = ({ items }: { items: ImmutList<Map<string, number>>}) => (
  <ul>
    {items.map(item => <li key={item.get('id')}>{item.get('name')}</li>)}
  </ul>
)

export default List
