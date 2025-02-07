import React from 'react'
import s from './Ceramics1.module.scss'
import { Link } from 'react-router-dom';
const Ceramics1 = () => {
  return (
<>

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



 </header>

</>
  )
}

export default Ceramics1