import { addItem, deleteItem } from '../action/job-applications'

import jobApplicationsReducer from './job-applications'

let testState

beforeEach(() => {
  testState = jobApplicationsReducer(undefined, {})
})

test('Handle ADD_ITEM', () => {
  testState = jobApplicationsReducer(testState, addItem())
  expect(testState.get('items').size).toBeGreaterThan(3)
})


test('Handle DELETE_ITEM', () => {
  testState = jobApplicationsReducer(testState, deleteItem(2))
  expect(testState.get('items').size).toBeLessThan(3)
})
