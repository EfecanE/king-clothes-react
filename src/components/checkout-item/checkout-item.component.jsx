import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CheckoutItemContainer, ImageContainer, RemoveButton, Name, Quantity, Arrow, Price, Value } from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addCartItemHandler = () => addItemToCart(cartItem);
  const removeCartItemHandler = () => removeItemFromCart(cartItem);
  const clearCartItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeCartItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addCartItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price * quantity}$</Price>
      <RemoveButton onClick={clearCartItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
