import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import { addItem } from "../../../redux/cart/cartSlice";

export const ProductCard = ({ product }) => {
    const { id, title, image01, price } = product;
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addItem({ id, title, image01, price }));
    };
    return (
        <div className="product bg-white w-72 h-80 p-2 rounded-md shadow-md hover:scale-105 transition-transform">
            <div className="wrap flex flex-col items-center justify-center">
                <div className="product__img w-44 h-44">
                    <img className="object-contain" src={image01} alt={title} />
                </div>
                <div className="product__desc">
                    <Link to={`/food/${id}`}>
                        <h4 className="text-xl font-bold truncate w-72 text-center">
                            {title}
                        </h4>
                    </Link>
                    <p className="text-xl flex items-center justify-center pb-5">
                        <span className="text-green-600">{price}</span>$
                    </p>
                </div>
                <button
                    onClick={addToCart}
                    className="p-2 bg-red-600 rounded-full hover:bg-gray-600 hover:text-white transition-all w-44"
                >
                    В корзину
                </button>
            </div>
        </div>
    );
};
