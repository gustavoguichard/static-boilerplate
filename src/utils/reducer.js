import { isEmpty } from 'lodash'

export const initState = {
  activeTab: false,
  menuOpen: false,
  ticks: 0,
  windowH: 0,
  windowW: 0,
  windowY: 0,
}

export default (state = initState, action) => {
  state = isEmpty(state) ? initState : state
  switch(action.name) {
    case 'WINDOW_RESIZED':
      return {
        ...state,
        windowW: action.width || state.windowW,
        windowH: action.height || state.windowH,
      }
    case 'CHANGED_TAB':
      return {
        ...state,
        activeTab: action.active,
      }
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen,
      }
    case 'WINDOW_SCROLLED':
      return {
        ...state,
        windowY: action.position,
      }
    case 'TICK':
      return {
        ...state,
        ticks: state.ticks + 1,
      }
    default:
      return state
  }
}
