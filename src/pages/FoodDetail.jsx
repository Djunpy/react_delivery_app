import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "../components/Helmet/Helmet";

import CommonSection from "../components/UI/Common-section/CommonSection";
import products from "../assets/fake-data/products";
import { ProductCard } from "../components/UI/Product-card/ProductCard";
import { addItem } from "../redux/cart/cartSlice";

export const FoodDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = products.find((item) => item.id === id);
    const { title, category, price, image01, image02, image03, desc } = product;
    const [previewImg, setPreviewImg] = useState(image01);
    const handleCurrentImg = (e) => {
        setPreviewImg(e.target.src);
    };
    const relatedProduct = products.filter(
        (item) => item.category === product.category
    );
    const addToCart = () => {
        dispatch(addItem({ id, title, price, image01 }));
    };

    useEffect(() => {
        setPreviewImg(product.image01);
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title={title}>
            <CommonSection title={title} />
            <section className="detail pt-5 h-full ">
                <div className="detail__box container mx-auto">
                    <div className="flex justify-center items-center sm:items-start sm:justify-start flex-wrap  gap-5">
                        <div className="detail__media flex flex-col sm:flex-row gap-2 items-center">
                            <div className="flex sm:flex-col items-center  gap-1">
                                <div
                                    className="img w-24 md:w-32"
                                    onClick={handleCurrentImg}
                                >
                                    <img src={image02} alt={title} />
                                </div>
                                <div
                                    className="img w-24 md:w-32"
                                    onClick={handleCurrentImg}
                                >
                                    <img src={image03} alt={title} />
                                </div>
                                <div
                                    className="img w-24 md:w-32"
                                    onClick={handleCurrentImg}
                                >
                                    <img src={image01} alt={title} />
                                </div>
                            </div>
                            <div className="main__img w-[300px] md:w-[395px] shrink-0">
                                <img src={previewImg} alt={title} />
                            </div>
                        </div>
                        <div className="detail__info flex items-center flex-col space-y-5">
                            <div className="space-y-10">
                                <h4 className="text-xl lg:text-2xl md:text-xl font-bold">
                                    {title}
                                </h4>
                                <p className="text-xl">
                                    <span className="font-bold">
                                        Категория:
                                    </span>{" "}
                                    <span>{category}</span>
                                </p>
                            </div>
                            <p className="text-4xl">
                                <span className="text-green-600">32</span>$
                            </p>
                            <button
                                className="bg-red-600 hover:bg-gray-600 hover:text-white transition-all p-2 rounded-full w-full"
                                onClick={addToCart}
                            >
                                В корзину
                            </button>
                        </div>
                        <div className=" p-3">
                            <h4 className="text-2xl tracking-wider font-bold pt-3 border-solid border-t-0  border-l-0 border-r-0">
                                Описание
                            </h4>
                            <p>{desc}</p>
                        </div>
                        <div className="relative__prod ">
                            <h4 className="text-center font-bold text-xl">
                                Похожие товары
                            </h4>
                            <div className="flex p-5 gap-5 flex-wrap items-center justify-center">
                                {relatedProduct.slice(0, 3).map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};
