import React from "react";
import { Routers } from "../../routers/Routers";
import { useSelector } from "react-redux";
import { Footer } from "../Food/Footer";
import { Header } from "../Header/Header";
import { Cart } from "../UI/Cart/Cart";
import { selectCartIsVisible } from "../../redux/cart/cartUiSlice";

export const Layout = () => {
    const CartIsVisible = useSelector(selectCartIsVisible);
    return (
        <div>
            <Header />
            {CartIsVisible ? <Cart /> : ""}
            <div>
                <Routers />
            </div>
            <Footer />
        </div>
    );
};
