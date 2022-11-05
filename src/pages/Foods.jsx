import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Helmet } from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-section/CommonSection";
import products from "../assets/fake-data/products";
import { ProductCard } from "../components/UI/Product-card/ProductCard";

export const Foods = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchedProduct = products.filter((item) => {
        if (searchTerm === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        }
    });
    const handelSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );
    const pageCount = Math.ceil(searchedProduct.length / productPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Helmet title={"Ассортимет"}>
            <CommonSection title={"Ну очень вкусно!"} />
            <section className="foods pt-5 h-full">
                <div className="foods__box flex flex-col gap-10 container mx-auto">
                    <div className="widgets flex items-center justify-center gap-3 sm:gap-0 sm:justify-between flex-wrap">
                        <div className="search relative w-72">
                            <input
                                className="p-2 indent-10 w-full rounded-full placeholder:font-bold focus:ring-1 focus:ring-red-600 focus:placeholder:text-red-600"
                                type="search"
                                value={searchTerm}
                                onChange={handelSearch}
                                placeholder="поиск.."
                            />
                            <RiSearch2Line
                                size={25}
                                className="absolute top-2 left-1 opacity-25"
                            />
                        </div>
                        <div className="filter">
                            <select className="p-3 rounded-md">
                                <option>Default</option>
                                <option value="ascending">
                                    По алфавиту, А-Я
                                </option>
                                <option value="descending">
                                    По алфавиту, Я-А
                                </option>
                                <option value="hight-price">
                                    По возрастанию цены
                                </option>
                                <option value="low-price">
                                    По убыванию цены
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="items flex items-center justify-center w-full">
                        <div className="items__box grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {displayPage.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center pb-5">
                        <ReactPaginate
                            pageCount={pageCount}
                            onPageChange={changePage}
                            previousLabel="Пред."
                            nextLabel="След."
                            containerClassName="paginationBtn"
                        />
                    </div>
                </div>
            </section>
        </Helmet>
    );
};
