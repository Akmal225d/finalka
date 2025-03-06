import React from 'react';
import { Link } from 'react-router-dom';
import s from './Chairs1.module.scss';

const chairs = [
  { id: 1, name: 'СТУЛ B822 ART GRAFITE', material: 'Велюр / Металл', price: '10 590 ₽', img: 'https://www.mebelaero.ru/upload/iblock/264/264211fe7662baf194eae6c035fc7b18.jpg' },
  { id: 2, name: 'СТУЛ B140 CAP VL2 BK', material: 'Велюр / Металл', price: '7 290 ₽', img: 'https://www.mebelaero.ru/upload/iblock/bf1/bf1c6b74f5b569095fb81ee5b9b9180f.jpg' },
  { id: 3, name: 'СТУЛ B108-M SD SNOW ', material: 'Замша / Металл', price: '7 790 ₽', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-YpXfbB-ErevcZwg_5lT1iewgBrkKsH8lg&s' },
  { id: 4, name: 'СТУЛ B607-M LATTE', material: 'Экокожа / Металл', price: '7 900 ₽', img: 'https://www.mebelaero.ru/upload/iblock/6d0/4ns9pv0pyguw01351489t40icn052noq.jpg' },
 
];

const Chairs1 = () => {
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <img src="/Search.png" alt="Поиск" className={s.img} />
            <div className={s.menu}><h1>Avion</h1></div>
            <div className={s.box}>
              <img src="/Avatar.png" alt="Профиль" />
              <img src="/Teleshka.png" alt="Корзина" />
            </div>
          </nav>
        </div>
        <div className={s.menu}>
          <Link to={'/Header'}>Home</Link> 
          <Link to="/Ceramics1">Ceramics</Link>
          <Link to="/Tables1">Tables</Link>
         
          <Link to="/Tableware1">Tableware</Link>
        </div>
      </header>

      <section className={s.chairsSection}>
        <div className="container">
          <div className={s.chairsGrid}>
            {chairs.map((chair) => (
              <div key={chair.id} className={s.chairCard}>
                <img src={chair.img} alt={chair.name} className={s.chairImg} />
                <h3>{chair.name}</h3>
                <p>{chair.material}</p>
                <span className={s.price}>{chair.price}</span>
                <Link to={`/chairs/${chair.id}`} className={s.buyButton}>Купить</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.menu1}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.card}>
              <b>Menu</b>
              <b>New arrivals</b>
              <b>Best sellers</b>
              <b>Popular this week</b>
              <b>All products</b>
            </div>
            <div className={s.card}>
              <b>Categories</b>
              <b>Furniture</b>
              <b>Plant pots</b>
              <b>Chairs</b>
              <b>Crockery</b>
            </div>

            <div className={s.card}>
              <b>Our company</b>
              <b>About us</b>
              <b>Contact us</b>
              <b>Privacy</b>
              <b>Returns policy</b>
            </div>

            <div className={s.card}>
              <b>Join our mailing list</b>
              <form action="" className={s.form}>
                <input type="text" value="your@email.com" />
                <button>Sign up</button>
              </form>
            </div>
          </div>

          <div className={s.wrap}>
            <b>Copyright 2022 Avion LTD</b>
          </div>
        </div>
      </section>
    </>

    
  );
};



export default Chairs1;
