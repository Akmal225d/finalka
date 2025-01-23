import React from "react";
import s from "./London.module.scss";
const London = () => {
  return (
    <>
      <section className={s.London}>
        <div className={s.container}>
          <div className={s.textBox}>
            <h1 className={s.title}>
            From a studio in London to a global brand with
            over 400 outlets
            </h1>
            <p className={s.description}>
            When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available for the mass market. <br /> <br /> Handmade, and lovingly crafted furniture and homeware is what we live, <br /> breathe and design so our Chelsea boutique become the <br /> hotbed for the London interior design community.
            </p>
            <button className={s.button}>Get in touch</button>
    
          </div>
          <div className={s.imageBox}>
            <img src="/pillow.png" alt="" className={s.image} />
        
          </div>
        </div>
      

        
      </section>
      
    </>
  );
};

export default London;
