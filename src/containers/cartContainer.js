import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/cart';
import * as message from './../constants/message';
import CartItem from './../components/cartItem'
import CartResult from './../components/cartResult';
import {actDeleteProductInCart,actChangeMessage,actUpdateProductInCart} from './../actions/index';
class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (

            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalMount(cart)}
            </Cart>

        );
    }

    //
    showCartItem = (cart) => {
        var result = <tr>
            <td>
                {message.MSG_CART_EMPTY}
            </td>
        </tr>
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    < CartItem
                        key={index}
                        item={item}
                        index={index}
                        actDeleteProductInCart={this.props.actDeleteProductInCart}
                        onChangeMessage={this.props.onChangeMessage}
                        onUpdateProductInCart ={this.props.onUpdateProductInCart}
                        onChangeMessage={this.props.onChangeMessage}
                    />
                )
            })
        }
        return result;
    }
    //
    showTotalMount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}




const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps =(dispatch,props) =>{
    return {
        actDeleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product,status) => {
            dispatch(actUpdateProductInCart(product,status));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
