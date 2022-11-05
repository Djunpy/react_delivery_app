import CategoryImg1 from "../../../assets/images/category-01.png";
import CategoryImg2 from "../../../assets/images/category-02.png";
import CategoryImg3 from "../../../assets/images/category-03.png";
import CategoryImg4 from "../../../assets/images/category-04.png";

const categoryData = [
    {
        id: 1,
        display: "Бургеры",
        imgUrl: CategoryImg1,
    },
    {
        id: 2,
        display: "Пица",
        imgUrl: CategoryImg2,
    },
    {
        id: 3,
        display: "Выпечка",
        imgUrl: CategoryImg3,
    },

    {
        id: 4,
        display: "Стейки",
        imgUrl: CategoryImg4,
    },
];

export const Category = () => {
    return (
        <div className="category-view container mx-auto w-full flex items-center justify-center">
            <div className="category-view__box grid grid-cols-2 gap-5 md:flex items-center  sm:justify-around p-3">
                {categoryData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-red-600 flex flex-col items-center justify-center p-1 w-52 md:w-52 lg:w-60 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                    >
                        <div className="img">
                            <img src={item.imgUrl} alt={item.display} />
                        </div>
                        <h4>{item.display}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};
