import React from "react";
import { Link } from "react-router-dom";
import styles from "./Tables1.module.scss"; 


const Tables1 = () => {
  return (
    <>
   <header className={styles.header}>  
     <div className="container">
       <nav className={styles.nav}>
   <img src="/Search.png" alt="" className={styles.img} />
   
   
   <div className={styles.menu}>
   <h1>Avion</h1>
   </div>
   
   
   <div className={styles.box}>
   <img src="/Avatar.png" alt="" />
   <img src="/Teleshka.png" alt="" />
   </div>
   
       </nav>
     </div>
   
     <div className={styles.menu}>
       
   <Link to={'/Ceramics1'}>Ceramics</Link>
   <Link to={'/Tables1'}>Tables</Link>
   <Link to={'/Chairs1'}>Chairs</Link>
   <Link to={'/Tableware1'}>Tableware</Link>
   <Link to={'/Cutlery1'}>Cutlery</Link>
   
   </div>
   
    </header>
      <div className={styles.productSection}>
        <div className={styles.productImage}>
<img src="./Image.svg" alt="" />
        </div>

        <div className={styles.productInfo}>
          <h2 className={styles.title}>Elegant Table</h2>
          <p className={styles.price}>£350</p>
          <p className={styles.description}>
            A beautifully designed table, crafted from high-quality wood. Perfect for any modern or classic interior.
          </p>

          <ul className={styles.features}>
            <li>Solid oak wood</li>
            <li>Handmade craftsmanship</li>
            <li>Timeless elegance</li>
          </ul>

          <div className={styles.dimensions}>
            <h3>Dimensions</h3>
            <p>Height: 75cm | Width: 150cm | Depth: 90cm</p>
          </div>

          <div className={styles.purchase}>
            <span>Amount:</span>
            <div className={styles.amountControl}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className={styles.addToCart}>Add to cart</button>
          </div>
        </div>
      </div>

  <section className={styles.popularProducts}>
        <div className="container">
          <h2>You might also love these</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/Large.png" alt="The Poplar suede sofa" className={styles.image} />
              <p className={styles.text}>The Poplar suede sofa</p>
              <p className={styles.price}>£980</p>
            </div>

            <div className={styles.card}>
              <img src="/Table.png" alt="The Dandy chair" className={styles.image} />
              <p className={styles.text}>The Dandy chair</p>
              <p className={styles.price}>£250</p>
            </div>

            <div className={styles.card}>
              <img
                src="/blackTable.png"
                alt="The Dandy chair"
                className={styles.image}
              />
              <p className={styles.text}>The Dandy chair</p>
              <p className={styles.price}>£250</p>
            </div>
          </div>
          <button className={styles.btn}>View collection</button>
        </div>
      </section>

    <section className={styles.club}>
      <div className={styles.container}>
     
        <img src="./flower.png" alt="Flower" className={styles.img1} />

        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h1>Join the club and get the benefits</h1>
            <p>
              Sign up for our newsletter and receive exclusive offers on new ranges,
              sales, pop-up stores, and more.
            </p>
          </div>

          <form className={styles.form}>
            <input type="email" placeholder="your@email.com" className={styles.input} />
            <button className={styles.button}>Sign up</button>
          </form>
        </div>
      </div>
    </section>

         <section className={styles.menu}>
            <div className="container">
              <div className={styles.wrap}>
                <div className={styles.card}>
                  <b>Menu</b>
                  <b>New arrivals</b>
                  <b>Best sellers</b>
                  <b>Popular this week</b>
                  <b>All products</b>
                </div>
                <div className={styles.card}>
                  <b>Categories</b>
                  <b>Furniture</b>
                  <b>Plant pots</b>
                  <b>Chairs</b>
                  <b>Crockery</b>
                </div>
    
                <div className={styles.card}>
                  <b>Our company</b>
                  <b>About us</b>
                  <b>Contact us</b>
                  <b>Privacy</b>
                  <b>Returns policy</b>
                </div>
    
                <div className={styles.card}>
                  <b>Join our mailing list</b>
    
                  <form action="" className={styles.form}>
                  <input type="text" value="your@email.com"  />
    
    
                    <button>Sign up</button>
                    
                  </form>
                </div>
              </div>
             
    
              <div className={styles.wrap}>
                <b>Copyright 2022 Avion LTD</b>
              </div>
            </div>
          </section>

    </>
  );
};








export default Tables1;
