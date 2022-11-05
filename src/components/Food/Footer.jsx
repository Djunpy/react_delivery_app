import {
    RiInstagramLine,
    RiLinkedinLine,
    RiTelegramLine,
} from "react-icons/ri";
import LogoImg from "../../assets/images/burger-logo.png";

export const Footer = () => {
    return (
        <div className="footer bg-red-600 h-40 sm:h-44 overflow-x-hidden">
            <div className="footer__box flex items-center justify-center sm:justify-between container mx-auto">
                <div className="footer__logo w-28 ">
                    <img src={LogoImg} alt="logo" />
                </div>
                <div className="hidden  sm:flex justify-center gap-10 p-3">
                    <ul className="flex flex-col items-center space-y-3">
                        <h4 className="font-bold">Часы работы</h4>
                        <li>Пн-Пт</li>
                        <li>8:00 - 18:00</li>
                    </ul>
                    <ul className="space-y-2 flex flex-col items-center">
                        <h4 className="font-bold">Подпишитесь на нас</h4>
                        <li className="hover:bg-gray-600 rounded-full p-1 cursor-pointer">
                            <RiInstagramLine size={25} />
                        </li>
                        <li className="hover:bg-gray-600 rounded-full p-1 cursor-pointer">
                            <RiLinkedinLine size={25} />
                        </li>
                        <li className="hover:bg-gray-600 rounded-full p-1 cursor-pointer">
                            <RiTelegramLine size={25} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
