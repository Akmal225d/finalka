import React from 'react';
import s from './Ceramics1.module.scss'

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

  <div className={s.menu}>
    
<Link to={'/Ceramics1'}>Ceramics</Link>
<Link to={'/Tables1'}>Tables</Link>
<Link to={'/Chairs1'}>Chairs</Link>
<Link to={'/Tableware1'}>Tableware</Link>
<Link to={'/Cutlery1'}>Cutlery</Link>

</div>

 </header>


</>
  )
}



export default Ceramics1;
