export default function Card(props) {
    return (
            <div className="card">
                <img src={require(`../images/${props.img}`)} alt={props.name } className="card--image" />
                <div className="card--stats">
                    <img src={require("../images/star.png")} alt="Star" className="card--star" />
                    <span>{props.rating}</span>
                    <span className="grey">({props.reviewCount})&nbsp;•&nbsp;</span>
                    <span className="grey">{props.country}</span>
                </div>
                <div className="card--content">
                    <p>{props.title}</p>
                    <p><span className="bold">From ${props.price}</span> / person</p>
                </div>
            </div>
    )
}