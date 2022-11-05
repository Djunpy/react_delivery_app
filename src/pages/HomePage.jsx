import { useState, useEffect } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import HeroImg from "../assets/images/hero.png";
import { Category } from "../components/UI/Category/Category";
import { Service } from "../components/UI/Service/Service";
import FoodCategory1 from "../assets/images/hamburger.png";
import FoodCategory2 from "../assets/images/pizza.png";
import FoodCategory3 from "../assets/images/bread.png";
import { ProductCard } from "../components/UI/Product-card/ProductCard";
import products from "../assets/fake-data/products";
import { Link } from "react-scroll";
export const HomePage = () => {
    const [category, setCategory] = useState("BURGER");
    const [allProducts, setAllProducts] = useState(products);
    useEffect(() => {
        if (category === "ALL") {
            setAllProducts(products);
        }

        if (category === "BURGER") {
            const filteredProducts = products.filter(
                (item) => item.category === "Burger"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "PIZZA") {
            const filteredProducts = products.filter(
                (item) => item.category === "Pizza"
            );

            setAllProducts(filteredProducts);
        }

        if (category === "BREAD") {
            const filteredProducts = products.filter(
                (item) => item.category === "Bread"
            );

            setAllProducts(filteredProducts);
        }
    }, [category]);

    return (
        <Helmet title="Главная">
            <div className="home pt-28 pb-10">
                <div className="home__box flex flex-col gap-16">
                    <section className="hero h-full">
                        <div className="hero__box flex flex-wrap items-center gap-10 justify-center">
                            <div className="heading flex flex-col items-center shrink-0">
                                <span className="text-green-600 text-base ">
                                    набери пару килограмм)
                                </span>
                                <h4 className="text-xl font-bold pb-5">
                                    Закажи прямо{" "}
                                    <span className="text-red-600">сейчас</span>{" "}
                                    !
                                </h4>
                                <Link to="popular" smooth={true} duration={500}>
                                    <button className="p-3 bg-red-600 rounded-full w-full hover:bg-gray-600 hover:text-white transition-all">
                                        Рекомендуем
                                    </button>
                                </Link>
                            </div>
                            <div className="hero__img w-[500px] ">
                                <img
                                    className="object-contain"
                                    src={HeroImg}
                                    alt="hero"
                                />
                            </div>
                            <Category />
                            <Service />
                        </div>
                    </section>
                    <section
                        name="popular"
                        className="h-full sm:p-5 md:p-0 container mx-auto space-y-5"
                    >
                        <div className="heading">
                            <h1 className="text-center text-xl sm:text-2xl md:text-3xl pb-3">
                                Часто заказывают
                            </h1>
                        </div>
                        <div className="category__btn bg-red-600 h-12 flex items-center justify-center rounded-md p-1">
                            <div className="btn__box flex items-center justify-center gap-10">
                                <button
                                    className={`${
                                        category === "ALL"
                                            ? "btn active"
                                            : "btn"
                                    }`}
                                    onClick={() => setCategory("ALL")}
                                >
                                    ALL
                                </button>
                                <button
                                    className={`${
                                        category === "BURGER"
                                            ? "btn active"
                                            : "btn"
                                    }`}
                                    onClick={() => setCategory("BURGER")}
                                >
                                    <img
                                        className="w-8 hidden sm:block"
                                        src={FoodCategory1}
                                        alt="burger"
                                    />
                                    Бургеры
                                </button>
                                <button
                                    className={`${
                                        category === "PIZZA"
                                            ? "btn active"
                                            : "btn"
                                    }`}
                                    onClick={() => setCategory("PIZZA")}
                                >
                                    <img
                                        className="w-8 hidden sm:block"
                                        src={FoodCategory2}
                                        alt="pizza"
                                    />
                                    Пицца
                                </button>
                                <button
                                    className={`${
                                        category === "BREAD"
                                            ? "btn active"
                                            : "btn"
                                    }`}
                                    onClick={() => setCategory("BREAD")}
                                >
                                    <img
                                        className=" hidden sm:block w-8  object-contain"
                                        src={FoodCategory3}
                                        alt="bread"
                                    />
                                    Выпечка
                                </button>
                            </div>
                        </div>
                        <div className="products flex items-center justify-center">
                            <div className="products__box grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {allProducts.slice(0, 6).map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Helmet>
    );
};
