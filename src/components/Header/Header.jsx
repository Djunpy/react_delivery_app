import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
    RiMenu3Line,
    RiUserLine,
    RiShoppingCartLine,
    RiCloseFill,
} from "react-icons/ri";
import { toggleCartUi } from "../../redux/cart/cartUiSlice";
import { selectTotalItemsInCart } from "../../redux/cart/cartSlice";
import LogoImg from "../../assets/images/burger-logo.png";

const nav_link = [
    {
        id: 1,
        display: "Главная",
        path: "/home",
    },
    {
        id: 2,
        display: "Ассортимент",
        path: "/foods",
    },
    // {
    //     id: 4,
    //     display: "Напишите нам",
    //     path: "/contact",
    // },
];

export const Header = () => {
    const dispatch = useDispatch();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    const showCart = () => {
        dispatch(toggleCartUi());
    };
    const totalItemsInCart = useSelector(selectTotalItemsInCart);
    return (
        <div className="header bg-white fixed w-full z-40">
            <div className="header__box container mx-auto w-full flex justify-between items-center">
                <Link to="/home">
                    <div className="header__logo cursor-pointer">
                        <img src={LogoImg} alt="logo" />
                    </div>
                </Link>

                {/* menu */}
                <div
                    className={`${showMobileMenu ? "menu show-menu" : "menu"}`}
                >
                    <div className="menu__wrap ">
                        {nav_link.map((link) => (
                            <NavLink
                                className="menu__item hover:text-red-600 transition-all text-xl"
                                key={link.id}
                                to={link.path}
                            >
                                {link.display}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div>
                    <ul className="flex items-center gap-5">
                        <li className="rounded-full shadow-md p-1 cursor-pointer hover:bg-red-600">
                            <RiUserLine size={25} />
                        </li>
                        <li
                            onClick={showCart}
                            className="relative rounded-full shadow-md p-1 cursor-pointer hover:bg-red-600"
                        >
                            <RiShoppingCartLine size={25} />
                            <span className="absolute -top-2 font-bold w-5 h-5 text-sm text-center bg-red-600 text-white rounded-full  -right-2">
                                {totalItemsInCart}
                            </span>
                        </li>
                        <li
                            onClick={handleMobileMenu}
                            className="sm:hidden block cursor-pointer shadow-md p-1 rounded-full"
                        >
                            {!showMobileMenu ? (
                                <RiMenu3Line size={25} />
                            ) : (
                                <RiCloseFill size={25} />
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
