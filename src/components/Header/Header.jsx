import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
const Header = () => {
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
<Link>Plant pots</Link>
<Link>Ceramics</Link>
<Link>Tables</Link>
<Link>Chairs</Link>
<Link>Crockery</Link>
<Link>Tableware</Link>
<Link>Cutlery</Link>

</div>

 </header>


</>
  )
}

export default Header
