// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_INCREMENT = 'DASHBOARD_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  console.log('dashboardVisitIncrement')
  return {
    type: DASHBOARD_INCREMENT,
    payload: value
  }
}

export const actions = {
  dashboardVisitIncrement
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DASHBOARD_INCREMENT]: (state, action) => {
    console.log('DASHBOARD_INCREMENT', state)
    return {
      ...state,
      visitsCount: state.visitsCount + action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitsCount: 0,
  dashboardItems: [
    { label: 'Angular' },
    { label: 'JQuery' },
    { label: 'Polymer' },
    { label: 'ReactJS' }
  ]
}
export default function dashboardReducer (state = initialState, action) {
  console.log('dashboardReducer', action.type, state)
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
