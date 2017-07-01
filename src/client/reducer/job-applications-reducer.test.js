import { addItem } from '../action/job-applications'

import jobApplicationsReducer from './job-applications'

let testState

beforeEach(() => {
  testState = jobApplicationsReducer(undefined, {})
})

test('Handle ADD_ITEM', () => {
  testState = jobApplicationsReducer(testState, addItem())
  expect(testState.get('items').size).toBeGreaterThan(3)
})
