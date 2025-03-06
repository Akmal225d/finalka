import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tableware1.module.scss';

const products = [
  {
    id: 1,
    image: 'https://olcha.uz/image/700x700/products/2022-06-22/chashka-s-blyudtsem-fissman-lykke-260ml-6348-60668-0.jpeg',
    title: 'Набор чашек с блюдцем FISSMAN Lykke 260мл 6шт (6348)',
    details: ['Чашки 260 мл - 6 шт', 'Блюдце 13 см - 6 шт', 'Материал - керамика'],
    price: '415 000 сум'
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyi5uRMBgF2RSjuSMTfN6UPrM-Oyhxfc2vw&s',
    title: 'Набор чашек с блюдцем FISSMAN Hygge 260мл 6шт ',
    details: ['Чашки 260 мл - 6 шт', 'Блюдце 13 см - 6 шт', 'Материал - керамика'],
    price: '395 000 сум'
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5trZjtLlGMIavovWJsiGYGFJy_PJqJ3XwDQ&s',
    title: 'Нож универсальный Fissman Tirol 13см (2755)',
    details: ['Длина клинка - 13 см', 'Материал - нержавеющая сталь', 'Ручка - Pakka Wood'],
    price: '117 000 сум'
  },
  {
    id: 4,
    image: 'https://strgimgr.umico.az/sized/840/837380-c86390664fbbfbe314008684ebf5e4c7.jpg',
    title: 'Весы напольные электронные Sonifer (SF-1921)',
    details: ['Тип весов - электронные', 'Материал платформы - пластик', 'Питание от батареек AAA'],
    price: '265 000 сум'
  }
];

const Tableware1 = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className="container">
            <nav className={styles.nav}>
              <img src="/Search.png" alt="Search" className={styles.img} />
              <div className={styles.menu}><h1>Avion</h1></div>
              <div className={styles.box}>
                <img src="/Avatar.png" alt="User" />
                <img src="/Teleshka.png" alt="Cart" />
              </div>
            </nav>
          </div>
          <div className={styles.menu}>
               <Link to={'/Header'}>Home</Link> 
            <Link to={'/Ceramics1'}>Ceramics</Link>
            <Link to={'/Tables1'}>Tables</Link>
            <Link to={'/Chairs1'}>Chairs</Link>
          
          </div>
        </header>

        <h2 className={styles.title}>🆕 Новинки</h2>

        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.title} className={styles.productImage} />
              <h3 className={styles.productTitle}>{product.title}</h3>
              <ul className={styles.productDetails}>
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <p className={styles.price}>{product.price}</p>
              <div className={styles.cartActions}>
                <button className={styles.quantityBtn}>-</button>
                <span className={styles.quantity}>1</span>
                <button className={styles.quantityBtn}>+</button>
                <button className={styles.cartBtn}>🛒 В корзину</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className={styles.menu1}>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles.card}><b>Menu</b><b>New arrivals</b><b>Best sellers</b><b>Popular this week</b><b>All products</b></div>
            <div className={styles.card}><b>Categories</b><b>Furniture</b><b>Plant pots</b><b>Chairs</b><b>Crockery</b></div>
            <div className={styles.card}><b>Our company</b><b>About us</b><b>Contact us</b><b>Privacy</b><b>Returns policy</b></div>
            <div className={styles.card}>
              <b>Join our mailing list</b>
              <form className={styles.form}>
                <input type="text" value="" placeholder="your@email.com" onChange={() => {}} />
                <button>Sign up</button>
              </form>
            </div>
          </div>
          <div className={styles.wrap}><b>Copyright 2022 Avion LTD</b></div>
        </div>
      </section>
    </>
  );
};

export default Tableware1;
