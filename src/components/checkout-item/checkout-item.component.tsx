import { FC, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart-action";

import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  Name,
  Quantity,
  Arrow,
  Price,
  Value,
} from "./checkout-item.styles";

export type CheckoutItemProps = {
  cartItem: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addCartItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeCartItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearCartItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeCartItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addCartItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price * quantity}$</Price>
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
