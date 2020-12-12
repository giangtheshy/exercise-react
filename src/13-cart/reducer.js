const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'GET_DATA') {
    return { ...state, cart: action.payload, loading: false };
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    const tempCart = state.cart.map(item => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'inc') {
          return { ...item, amount: item.amount + 1 }
        }
        if (action.payload.type === 'dec') {
          return { ...item, amount: item.amount - 1 }
        }
      }
      return item
    }).filter(item => item.amount !== 0)
    return { ...state, cart: tempCart }
  }
  if (action.type === "REMOVE") {
    return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }
  }
  if (action.type === "GET_TOTAL") {
    let { amount, total } = state.cart.reduce((cartTotal, item) => {
      const totalItem = item.amount * item.price
      cartTotal.total += totalItem
      cartTotal.amount += item.amount
      return cartTotal
    }, { amount: 0, total: 0 })
    total = total.toFixed(2)
    return { ...state, total, amount }
  }
  if (action.type === "CLEAR") {
    return { ...state, cart: [] }
  }
  throw new Error('not find action type')
}
export default reducer