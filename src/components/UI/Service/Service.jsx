import DeliveryImg from "../../../assets/images/service-01.png";
import DinerImg from "../../../assets/images/service-02.png";
import PickUpImg from "../../../assets/images/service-03.png";

const serviceData = [
    {
        id: 1,
        display: "Доставка",
        imgUrl: DeliveryImg,
    },
    {
        id: 2,
        display: "Быстрая готовка",
        imgUrl: DinerImg,
    },
    {
        id: 3,
        display: "Минимум ожидания",
        imgUrl: PickUpImg,
    },
];
export const Service = () => {
    return (
        <div className="service hidden md:block">
            <div className="service__box flex items-center gap-5">
                {serviceData.map((item) => (
                    <div
                        key={item.id}
                        className="service__item bg-white flex flex-col items-center p-2 rounded-lg gap-1 w-52"
                    >
                        <div className="item__img  w-20 ">
                            <img src={item.imgUrl} alt={item.display} />
                        </div>
                        <h4 className="text-green-600">{item.display}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};
