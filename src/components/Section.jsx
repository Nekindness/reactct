export default function Section({header, text, imgLink}) {
    return (
      <section>
        <div className="section-container">
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
        <img src={imgLink} alt='Картинка'></img>
      </section>
    )
  }
  
  