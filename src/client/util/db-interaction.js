// @flow
import 'isomorphic-fetch'

export const dbPush = (data: {id: number, name: string}) => fetch('/api/push', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    item: data,
  }),
})

export const dbRemove = (index: number) => fetch('/api/remove', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    index,
  }),
})

export const dbUpdate = (index: number, val: string) => fetch('/api/update', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    index,
    val,
  }),
})

export const dbGET = () => fetch('api/get', { method: 'GET' })
  .then(res => res.json())
