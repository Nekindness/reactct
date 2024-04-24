import Header from './components/Header';
import Section from './components/Section';
import Discription from './components/Discription';
import Item from './components/Item';
import dino from './assets/dino.png';
import bike from './assets/bike.png';

function App() {
  const firstSec = {
    "header" : 'Веломастерская “Велозар”',
    "text" : 'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.',
    "imgLink" : dino,
  }

  const secondSec = {
    "header" : 'Что мы предлагаем',
    "text" : 'В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. ',
    "imgLink" : bike,
  }
  
  const itemsData = {
    item1: {
      color: "#22356F",
      text: "Годовое ТО"
    },
    item2: {
      color: "#0052C1",
      text: "Выравнивание колес"
    },
    item3: {
      color: "#76B58B",
      text: "Настройка переключателей"
    }
  }

  return (
  <>
    <Header />
    <div className="content-wrapper">
      <Section header={firstSec.header} text={firstSec.text} imgLink={firstSec.imgLink}/>
      <Section header={secondSec.header} text={secondSec.text} imgLink={secondSec.imgLink}/>
    </div>
    <Discription />
    <div className="item-wrapper">
      <Item color={itemsData.item1.color} text={itemsData.item1.text}/>
      <Item color={itemsData.item2.color} text={itemsData.item2.text}/>
      <Item color={itemsData.item3.color} text={itemsData.item3.text}/>
    </div>
  </>
  )
}

export default App
