import './cssfiles/scoreboard.css'

function Scoreboard(props) {
    return(
        <div className='scoreboard'>
            <p>Best Score: {props.bestScore}</p>
            <p>Current Score: {props.currentScore}</p>
        </div>
    )
}

export default Scoreboard