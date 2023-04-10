import {CartItemContainer, ItemDetails, Name, Price} from "./cart-item.styles";
import { FC } from "react";

export type CartItemProps = {
  cartItem: {
    name: string;
    imgUrl: string;
    price: number;
    quantity: number;
  };
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imgUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imgUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
