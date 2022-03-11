import './cssfiles/game.css'
import Card from './card'

function Game(props) {
    return(
        <div className='gameArea'>
            {props.cardArray.map(item => (
                <Card item={item} shuffler={props.shuffler} key={item.num} num={item.num}></Card>
            ))}
        </div>
    )
}

export default Game