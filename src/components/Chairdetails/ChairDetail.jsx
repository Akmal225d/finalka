import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import s from "./ChairDetail.module.scss";

const chairs = [
  { 
    id: 1, name: 'СТУЛ B822 ART GRAFITE', material: 'Велюр / Металл', price: '10 590 ₽', 
    img: 'https://grandfs.ru/upload/iblock/029/jroewplgxfjwutoelsstjh9j53zzweor.jpg',
    stock: 'много', delivery: 'от 990 ₽', colors: ['#5A5A5A', '#000000']
  },
  { 
    id: 2, name: 'СТУЛ B140 CAP VL2 BK', material: 'Велюр / Металл', price: '6 990 ₽', 
    img: 'https://avatars.mds.yandex.net/get-mpic/4012462/2a00000193770bb3141618d619ee44260c34/orig',
    stock: 'много', delivery: 'от 990 ₽', colors: ['#C4A484', '#000000', '#5A5A5A']
  },
  { 
    id: 3, name: 'СТУЛ B108-M SD SNOW', material: 'Эко-кожа / Металл', price: '8 490 ₽', 
    img: 'https://www.mebelaero.ru/upload/iblock/d06/ctafg8z2zcdcvcpyb1fsb6aft7danx17.jpg',
    stock: 'в наличии', delivery: 'от 750 ₽', colors: ['#FFFFFF', '#C0C0C0']
  },
  { 
    id: 4, name: 'СТУЛ B607-M LATTE', material: 'Ткань / Металл', price: '9 250 ₽', 
    img: 'https://www.mebelaero.ru/upload/iblock/b41/b41819d0ac2262c4915f3e7926fe8569.jpg',
    stock: 'ограничено', delivery: 'от 890 ₽', colors: ['#000000', '#808080']
  }
];

const ChairDetail = () => {
  const { id } = useParams();
  const chair = chairs.find((c) => c.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!chair) return <h2>Стул не найден</h2>;

  return (
    <div className="main-content">
      <div className={s.detailContainer}>
        <div className={s.imageSection}>
          <img src={chair.img} alt={chair.name} className={s.chairImg} />
        </div>
        <div className={s.infoSection}>
          <h1>{chair.name}</h1>
          <span className={s.price}>{chair.price}</span>
          <div className={s.quantityControl}>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button className={s.buyButton}>В корзину</button>
          <p className={s.stockInfo}>На складе: <span className={s.stock}>{chair.stock}</span></p>
          <p className={s.deliveryInfo}>Доставка: {chair.delivery}</p>
          <div className={s.colorOptions}>
            {chair.colors.map((color, index) => (
              <span key={index} className={s.colorCircle} style={{ backgroundColor: color }}></span>
            ))}
          </div>
        </div>
      </div>
  
      {/* FOOTER */}
      <section className={s.menu}>
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
                <input type="text" placeholder="your@email.com" />
                <button>Sign up</button>
              </form>
            </div>
          </div>
  
          <div className={s.wrap}>
            <b>Copyright 2022 Avion LTD</b>
          </div>
        </div>
      </section>
    </div>
  );

};

export default ChairDetail;
