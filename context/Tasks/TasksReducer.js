export default (state, action) => {
  const { payload, type } = action;

  // switch (type) {
  //   case ADD_TO_CART:
  //     const newProducts = state.products.map((p) =>
  //       payload.name === p.name ? { ...p, isInCart: true } : p
  //     );
  //     return { ...state, products: newProducts };

  //   case DELETE_FROM_CART:
  //     return { ...state, selectedUser: payload };

  //   default:
  //     return state;
  // }
};
