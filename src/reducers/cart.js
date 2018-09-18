import * as types from './../constants/actionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIdProduct(state, action.product)
            if (index !== -1) {
                state[index].quantity = state[index].quantity + 1;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.DELETE_PRODUCT_IN_CART:
            index = findIdProduct(state, action.product);
            if (index !== -1) {
                state.splice(index, 1);
            }

            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        case types.UPDATE_PRODUCT_IN_CART:
            index = findIdProduct(state, action.product);
            if (index !== -1) {
                if (state[index].quantity > 0) {
                    state[index].quantity = state[index].quantity + action.status;
                }
                if(state[index].quantity === 0) {
                    state[index].quantity = state[index].quantity + 1;
                }
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        default: return [...state];
    }

}
var findIdProduct = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = [i];
            }
        }
    }
    return index;
}

export default cart;