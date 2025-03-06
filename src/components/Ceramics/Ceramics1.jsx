import React from "react";
import { Link } from "react-router-dom";
import s from "./Ceramics1.module.scss"; // Подключаем SCSS

const Ceramics1 = () => {
  return (
    <>
      {/* Шапка сайта */}
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <img src="/Search.png" alt="" className={s.img} />

            <div className={s.menu}>
              <h1>Avion</h1>
            </div>

            <div className={s.box}>
              <img src="/Avatar.png" alt="" />
              <img src="/Teleshka.png" alt="" />
            </div>
          </nav>
        </div>

        <div className={s.menu}>
          <Link to={'/Header'}>Home</Link> 
    
          <Link to={"/Tables1"}>Tables</Link>
          <Link to={"/Chairs1"}>Chairs</Link>
          <Link to={"/Tableware1"}>Tableware</Link>


        </div>
      </header>

      <section className={s.aboutSection}>
      {/* Левый блок с текстом */}
      <div className={s.textBlock}>
        <h2>It started with a small idea</h2>
        <p>
          A global brand with local beginnings, our story began in a small
          studio in South London in early 2014
        </p>
        <button className={s.viewButton}>View collection</button>
      </div>

      {/* Правый блок с изображением */}
      <div className={s.imageBlock}>
        <img src="/kreslo.png" alt="Luxury Interior" />
      </div>
    </section>


    <section className={s.sSection}>
      <div className={s.overlay}>
        <input type="email" placeholder="your@email.com" className={s .input} />
        <button className={s.subscribeButton}>Sign up</button>
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
                  <input type="text" value="your@email.com"  />
    
    
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

export default Ceramics1;
