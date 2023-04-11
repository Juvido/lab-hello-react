import style from "./style.module.css"

export function Card(props) {
  return (
    <div className={style.cardContainer}>
      <img src={props.img} alt={props.cardTitle} className={style.img} />
      <h2 className={style.subTitle} >{props.cardTitle}</h2>
      <p className={style.textContent}>{props.content}</p>
    </div>
  );
}
