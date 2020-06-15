
const INITIAL_STATE = {
  sidebar: false,
  cartSidebar: false,
  searching: '',
};
export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MENU':
      return {
        ...state,
        sidebar: !state.sidebar,
        option: action.value,
      };
    case 'SEARCHING':
      return {
        ...state,
        searching: action.value,
      };
    default:
      return state;
  }
}
