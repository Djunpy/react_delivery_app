import { useDispatch } from "react-redux";
import { RiCloseCircleLine } from "react-icons/ri";
import {
    deleteItem,
    deleteItems,
    addItem,
} from "../../../redux/cart/cartSlice";

export const CartItem = ({ product }) => {
    const { id, title, image01, price, quantity } = product;
    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(addItem({ id, title, image01, price }));
    };
    const decrementItem = () => {
        dispatch(deleteItem(id));
    };

    const deleteItemInCart = () => {
        dispatch(deleteItems(id));
    };

    return (
        <div className="cart-item">
            <div className="wrap flex items-center justify-around p-2">
                <div className="item__img w-20 relative">
                    <img src={image01} alt={title} />
                    <span className="absolute bottom-2 right-0 bg-red-600 rounded-full">
                        X{quantity}
                    </span>
                </div>
                <div className="item__desc flex flex-col items-center">
                    <h4 className="font-bold truncate w-36">{title}</h4>
                    <p className="text-xl">
                        <span className="text-green-600">{price}</span>$
                    </p>
                    <div className="bg-gray-400 h-8 rounded-sm flex items-center justify-between p-1">
                        <button onClick={decrementItem} className="text-xl">
                            -
                        </button>
                        <input
                            onChange={() => {}}
                            className="w-[60px] bg-transparent text-center"
                            type="text"
                            value={quantity}
                            min="1"
                        />
                        <button onClick={incrementItem} className="text-xl">
                            +
                        </button>
                    </div>
                </div>
                <div
                    onClick={deleteItemInCart}
                    className="hover:bg-red-600 rounded-full cursor-pointer transition-all flex items-center justify-center"
                >
                    <RiCloseCircleLine size={25} />
                </div>
            </div>
        </div>
    );
};
