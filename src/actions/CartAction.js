const addToCart = (item) => {
    return (dispatch) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    })};
};

export default addToCart;
  