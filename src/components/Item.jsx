export default function Item({color, text}) {
    return (
     <div className="square" style={{background: color}}>
        <hr/>
        <span>{text}</span>
     </div>
    )
  }
  
  