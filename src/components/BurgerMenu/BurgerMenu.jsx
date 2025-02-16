import { useState } from "react";
import s from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={s.burgerContainer}>
            {/* Бургер-кнопка */}
            <div className={`${s.burger} ${isOpen ? s.open : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Затемнение фона при открытии */}
            {isOpen && <div className={s.overlay} onClick={() => setIsOpen(false)}></div>}

            {/* Меню */}
            <nav className={`${s.menu} ${isOpen ? s.open : ""}`}>
                <ul>
                    <li><a href="#">Ceramics</a></li>
                    <li><a href="#">Tables</a></li>
                    <li><a href="#">Chairs</a></li>
                    <li><a href="#">Tableware</a></li>
                    <li><a href="#">Cutlery</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;
