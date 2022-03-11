import './cssfiles/card.css'

function Card(props) {
    return(
        <div className="card" onClick={props.shuffler} >
            <img src={props.item.image} num={props.num}></img>
        </div>
    )
}

export default Card 