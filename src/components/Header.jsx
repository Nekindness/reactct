import logo from "../assets/logo.svg";

export default function Header() {
    return (
      <header>
       <div className="logo">
            <img src={logo} alt="Logo"/>
       </div> 
       <nav>
        <a href="#">О нас</a>
        <a href="#">Услуги</a>
        <a href="#">Аренда</a>
       </nav>
       <button>Связаться</button>
      </header>
    )
  }
  
  