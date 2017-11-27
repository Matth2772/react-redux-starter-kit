// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_INCREMENT = 'DASHBOARD_INCREMENT'
export const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
export const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardAddItem (value) {
  console.log('dashboardAddItem')
  return {
    type: DASHBOARD_ADD_ITEM,
    payload: value
  }
}

export function dashboardEditItem (value) {
  console.log('dashboardEditItem')
  return {
    type: DASHBOARD_EDIT_ITEM,
    payload: value
  }
}

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
  [DASHBOARD_ADD_ITEM]: (state, action) => {
    console.log('DASHBOARD_ADD_ITEM', state)
    const mockedId = Math.floor(Date.now() / 1000)
    const newItem = {
      label: action.payload.label,
      id: mockedId
    }

    return {
      ...state,
      dashboardItems: [...state.dashboardItems, newItem]
    }
  },
  [DASHBOARD_EDIT_ITEM]: (state, action) => {
    console.log('DASHBOARD_EDIT_ITEM', state)
    const { label, editItemIndex: index } = action.payload
    let newItem = {
      ...state.dashboardItems[index],
      label
    }
    const immutabledashboardItems = [
      ...state.dashboardItems.slice(0, index),
      newItem,
      ...state.dashboardItems.slice(index + 1)
    ]
    return {
      ...state,
      dashboardItems: immutabledashboardItems
    }
  },
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
    {label: 'Angular'},
    {label: 'JQuery'},
    {label: 'Polymer'},
    {label: 'ReactJS'}
  ]
}
export default function dashboardReducer (state = initialState, action) {
  console.log('dashboardReducer', action.type, state)
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
