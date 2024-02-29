export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../src/assets/${props.item.coverImg}`} className="card--image" alt="Main card image" />
        <div className="card--stats">
          <img src="../src/assets/star.png" className="card--star" alt="Star icon." />
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.reviewCount}) . </span>
          <span className="gray">{props.item.location}</span>
        </div>
        <h2 className="card--title">{props.item.title}</h2>
        <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
      </div>
    )
}