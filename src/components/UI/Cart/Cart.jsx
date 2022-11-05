import { useSelector } from "react-redux";
import {
    selectItemsInCart,
    selectTotalAmount,
} from "../../../redux/cart/cartSlice";
import { CartItem } from "./CartItem";

export const Cart = () => {
    const cartItems = useSelector(selectItemsInCart);
    const cartTotalAmount = useSelector(selectTotalAmount);
    return (
        <div className="cart fixed  w-80 z-50 flex flex-col justify-between bg-white">
            <div className="cart__box h-[730px] overflow-y-auto">
                {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>
            <div className="cart__footer w-full h-20 bg-red-600 flex flex-col items-center gap-1 p-2">
                <h4 className="text-xl">Всего к оплате</h4>
                <p className="text-xl">
                    <span className="text-green-600">{cartTotalAmount}</span>$
                </p>
            </div>
        </div>
    );
};
